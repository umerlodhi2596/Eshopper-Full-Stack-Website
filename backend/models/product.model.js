import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    minLength: [10, "There must be atleast 10 characters in title field"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    minLength: [25, "There must be atleast 25 characters in description field"],
    required: true,
  },
  tag: {
    type: String,
    enum: ["trendy", "featured", "recent", "shop"],
    default: "shop",
  },
  category: {
    type: String,
    required: true,
  },
}, {timestamps: true});

export const Product = mongoose.model("product", productSchema);
