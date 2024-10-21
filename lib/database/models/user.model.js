import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true }, // Clerk auth ID
    firstName: { type: String, required: true }, // User's first name
    lastName: { type: String, required: true }, // User's last name
    email: { type: String, required: true, unique: true }, // User's email address
    profilePicture: { type: String, required: true }, // URL to profile picture

    isPaid: {type: Boolean, default: false, required: true}, // is user pain
    selectedPlan: { type: String, enum: ['Basic', 'Plus', 'Custom'], default: "" }, // Reference to subscription
    freePlanStartedAt: { type: Date }, // Start date of free plan
    freePlanEndedAt: { type: Date }, // End date of free plan
    billingHistory: [{
        planId: String, // Plan ID for billing
        amount: Number, // Billed amount
        date: Date // Billing date
    }],
    isActive: { type: Boolean, required: true, default: false }, // Account active status

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

UserSchema.pre('findOneAndDelete', async function(next) {
    try {
      const user = await this.model.findOne(this.getQuery());
      if (user) {
        await Store.deleteMany({ ownerId: user._id });
      }
      next();
    } catch (error) {
      next(error);
    }
  });


const User = models?.User || model("User", UserSchema)
export default User