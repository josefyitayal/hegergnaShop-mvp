import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: { type: String, required: true }, // Product name
    description: { type: String }, // Product description
    category: { type: String }, // Product category
    price: { type: Number, required: true }, // Product price
    comparePrice: { type: Number }, // Original price for comparison
    media: { type: Array, required: true }, // Media URLs for product images
    costPrice: { type: Number, required: true }, // Cost price for calculation
    profit: { type: Number }, // Profit from sale
    stock: { type: Number, required: true }, // Number of items in stock
    soldCount: { type: Number, default: 0 }, // Count of sold items
    isPublished: { type: Boolean, default: true }, // Visibility status
    storeId: { type: Schema.Types.ObjectId, ref: "Store", required: true }, // Reference to Store model
    createdAt: { type: Date, required: true }, // Product creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const Product = models?.Product || model("Product", ProductSchema)
export default Product