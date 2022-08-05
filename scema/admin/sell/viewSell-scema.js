import mongoose from "mongoose";
const viewSell = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    Order_ID: {
      type: String,
    },
    Full_Name: {
      type: mongoose.Schema.Types.ObjectId,
    },
    accId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "Sell",
    timestamps: true,
  }
);
export const viewSellModel = mongoose.model("viewSell", viewSell);
