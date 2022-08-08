import mongoose from "mongoose";
const purchaseDowlandPdf = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "purchase",
    // timestamps: true,
  }
);
export const purchaseDowlandPdfModel = mongoose.model(
  "purchaseDowlandPdf",
  purchaseDowlandPdf
);
