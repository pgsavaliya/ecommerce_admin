import mongoose from "mongoose";
const totalPurchase = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
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
export const totalPurchaseModel = mongoose.model(
  "totalPurchase",
  totalPurchase
);
