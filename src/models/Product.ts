import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
