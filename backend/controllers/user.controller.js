import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const signUpUser = async (req, res) => {
  try {
    const body = req.body;

    const hashedPassword = await bcrypt.hash(body.password, 10);

    body.password = hashedPassword;

    await User.create(body);
    res.json({
      success: true,
      message: "You Account Created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = await User.findOne({
      $or: [
        { username: identifier },
        { email: identifier.toLowerCase() },
      ],
    });

    if (!user) {
      return res.json({ message: "Invalid Username or password" });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.json({
        success: false,
        message: "Password You Entered is Incorrect",
      });
    }

    const token = await jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1hr" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 3600000,
      })
      .json({
        message: "User is successfully login",
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (req, res) => {
      res.cookie('token', null, {
        httpOnly: true,
        maxAge: 0,
        secure: true,
        sameSite: "lax"
    }).json({
        success: true,
        message: 'User is successfully logout'
    })

};

export const getMe = async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  res.status(200).json(user);
};
