import { Category } from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().limit(6).sort({createdAt: -1});
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id);
        res.json(category);
    } catch (error) {
        console.log(error)
    }
}

export const createCategory = async (req, res) => {
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

    } catch (error) {
        console.error("Create category error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;

        await Category.findByIdAndDelete(id);

        res.json({
            message: "Category Deleted Successfully"
        })

    } catch (error) {
        console.log(error)
    }
}