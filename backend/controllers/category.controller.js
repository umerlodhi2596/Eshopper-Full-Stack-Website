import { Category } from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find().limit(6).sort({createdAt: -1});
        res.json(categories);
    } catch (err) {
        next(err)
    }
}

export const getCategoryById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.json(category);
    } catch (err) {
        next(err)
    }
}

export const createCategory = async (req, res, next) => {
    try {
        const body = req.body;

        const uploadedResult = await cloudinary.uploader.upload(body.image, {
            folder: "eshopper/categories",
        });

        body.image = uploadedResult.secure_url;

        await Category.create(body);

        res.status(201).json({
            success: true,
            message: "Category Successfully Created",
        });

    } catch (err) {
       next(err)
    }
};


export const deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params;

        await Category.findByIdAndDelete(id);

        res.json({
            message: "Category Deleted Successfully"
        })

    } catch (err) {
        next(err)
    }
}