import mongoose from "mongoose";
const ExpenseDowlandPdf = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "Expense",
    // timestamps: true,
  }
);
export const ExpenseDowlandPdfModel = mongoose.model(
  "ExpenseDowlandPdf",
  ExpenseDowlandPdf
);
