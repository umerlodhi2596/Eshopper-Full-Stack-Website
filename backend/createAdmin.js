import bcrypt from 'bcrypt'
import {User} from './models/user.model.js';



export const createAdmin = async (req, res) => {
    let existing = await User.findOne({role: "admin"})
    if(!existing) {
        let username = process.env.ADMIN_USERNAME;
        let email = process.env.ADMIN_EMAIL;
        let password = process.env.ADMIN_PASSWORD;


        let hashedPassword = await bcrypt.hash(password, 12);

        await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'admin'
        })

        console.log("admin created successfully")

    }else {
        console.log("admin already exist")
    }
}