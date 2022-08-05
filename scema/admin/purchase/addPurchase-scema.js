import mongoose from "mongoose";
const addPurchase = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    name: {
      type: String,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    accId:{
      type: mongoose.Schema.Types.ObjectId,
      require: true
    }
  },
  {
    collection: "purchase",
    timestamps: true,
  }
);
export const addPurchaseModel = mongoose.model("addPurchase", addPurchase);
