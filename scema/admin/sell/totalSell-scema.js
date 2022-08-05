import mongoose from "mongoose";
const totalSell = new mongoose.Schema(
  {
    _id: {
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
export const totalSellModel = mongoose.model("totalSell", totalSell);
