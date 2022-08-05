import mongoose from "mongoose";
const viewPurchase = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    accId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "purchase",
    timestamps: true,
  }
);
export const viewPurchaseModel = mongoose.model("viewPurchase", viewPurchase);
