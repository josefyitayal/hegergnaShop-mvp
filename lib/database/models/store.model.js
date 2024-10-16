import { Schema, model, models } from "mongoose";

const StoreSchema = new Schema({
    storeName: { type: String, required: true }, // Store's name
    storePhone: { type: String, required: true, unique: true }, // Store's contact phone
    storeEmail: { type: String, required: true }, // Store's email
    description: { type: String }, // Store description
    storeLogo: { type: String }, // URL to store logo
    selectedTemplate: { type: String }, // Chosen template ID
    address: { type: Object }, // Store address object
    domainName: { type: String }, // Custom domain name
    socialLinks: {
        facebook: { type: String }, // Facebook link
        instagram: { type: String }, // Instagram link
        twitter: { type: String }, // Twitter link
        tiktok: { type: String } // Twitter link
    },
    planType: { type: String, required: true }, // Subscription plan type
    coordinates: { type: { lat: Number, lng: Number } }, // Latitude and longitude
    isPublish: { type: Boolean, required: true, default: false }, // Published status
    createdAt: { type: Date, required: true }, // Store creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const Store = models?.Store || model("Store", StoreSchema)
export default Store