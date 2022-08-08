import mongoose from "mongoose";
const SellDowlandPdf = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "Sell",
    // timestamps: true,
  }
);
export const SellDowlandPdfModel = mongoose.model(
  "SellDowlandPdf",
  SellDowlandPdf
);
