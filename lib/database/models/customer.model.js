import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
    firstName: { type: String, required: true }, // Customer's first name
    lastName: { type: String, required: true }, // Customer's last name
    email: { type: String, required: true }, // Customer's email address
    phone: { type: String, required: true }, // Customer's phone number
    address: { // Customer's address
        type: Object
    },
    orders: [{ type: String }], // Array of Order ID in convex
    createdAt: { type: Date, required: true }, // Customer creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const Customer = models?.Customer || model("Customer", CustomerSchema)
export default Customer