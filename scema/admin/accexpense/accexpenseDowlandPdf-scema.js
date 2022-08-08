import mongoose from "mongoose";
const accExpenseDowlandPdf = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "AccExpense",
    // timestamps: true,
  }
);
export const accExpenseDowlandPdfModel = mongoose.model(
  "accExpenseDowlandPdf",
  accExpenseDowlandPdf
);
