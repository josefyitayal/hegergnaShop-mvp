import { Schema, model, models } from "mongoose";

const CustomThemeSchema = new Schema({
    storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true }, // Reference to Store model
    templateId: { type: String, required: true }, // Template ID being customized
    customStyles: { type: Object }, // JSON object for customized styles
    createdAt: { type: Date, required: true }, // Theme creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const customTheme = models?.customTheme || model("customTheme", CustomThemeSchema)
export default customTheme