import { Schema, model, models } from "mongoose";

const CollectionSchema = new Schema({
    name: { type: String, required: true }, // Collection name
    description: { type: String }, // Description of the collection
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }], // Array of Product references
    storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true }, // Reference to Store model
    createdAt: { type: Date, required: true }, // Collection creation date
    updatedAt: { type: Date, required: true } // Last update date
});

const Collection = models?.Collection || model("Collection", CollectionSchema)
export default Collection