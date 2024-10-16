import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true }, // Clerk auth ID
    firstName: { type: String }, // User's first name
    lastName: { type: String }, // User's last name
    email: { type: String, required: true, unique: true }, // User's email address
    profilePicture: { type: String, required: true }, // URL to profile picture

    isPaid: {type: Boolean, default: false, required: true}, // is user pain
    subscriptionId: { type: String }, // Reference to subscription
    freePlanStartedAt: { type: Date }, // Start date of free plan
    freePlanEndedAt: { type: Date }, // End date of free plan
    billingHistory: [{
        planId: String, // Plan ID for billing
        amount: Number, // Billed amount
        date: Date // Billing date
    }],
    isActive: { type: Boolean, required: true, default: false }, // Account active status
    store: { type: Schema.Types.ObjectId, ref: "Store" }, // Reference to Store model
    address: {
        type: Object
    },
    saleType: {
        type: String,
        enum: ['dropshipping', 'self-fulfillment', 'not-selected'],
        default: "not-selected"
    },
    createdAt: { type: Date, required: true }, // Account creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const User = models?.User || model("User", UserSchema)
export default User