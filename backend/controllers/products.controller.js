import { Product } from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllProducts = async (req, res) => {
  try {
    const { slug, search, page, limit, minPrice, maxPrice, sort } = req.query;

    let query = {};

    // Filter by category
    if (slug) {
      query.category = slug;
    }

    if (minPrice && maxPrice) {
      query.price = {
        $gte: Number(minPrice),
        $lte: Number(maxPrice),
      };
    }

    let sortOrder = 1;

    if(sort === "Descending") sortOrder = -1;

    // Search by name or description
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    let products;
    let totalProduct = await Product.countDocuments(query);
    let pageNumber, limitNumber, totalPages;

    if (page && limit) {
      pageNumber = parseInt(page) || 1;
      limitNumber = parseInt(limit) || 6;
      const skip = (pageNumber - 1) * limitNumber;
      products = await Product.find(query).skip(skip).limit(limitNumber).sort({createdAt: sortOrder});
      totalPages = Math.ceil(totalProduct / limitNumber);
    } else {
      products = await Product.find(query);
      pageNumber = 1;
      limitNumber = totalProduct;
      totalPages = 1;
    }

    res.json({
      products,
      page: pageNumber,
      limit: limitNumber,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log(error || "something went wrong");
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const body = req.body;

    const uploadedResult = await cloudinary.uploader.upload(body.image, {
      folder: "eshopper",
    });

    body.image = uploadedResult.secure_url;

    await Product.create(body);
    res.json({
      message: "Product Created Successfully",
    });
  } catch (err) {
    next(err)

  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await Product.findByIdAndUpdate(id, body);
    res.json({
      message: "Product Updated Successfully",
    });
  } catch (error) {
    console.log(error || "something went wrong");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error || "something went wrong");
  }
};

export const getTrandyProducts = async (req, res) => {
  try {
    const trendyProducts = await Product.find({ tag: "trendy" })
      .limit(8)
      .sort({ createdAt: -1 });
    res.status(200).json(trendyProducts);
  } catch (error) {
    console.log(error);
  }
};
