import mongoose from "mongoose";
const totalaccExpense = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "AccExpense",
    timestamps: true,
  }
);
export const totalaccExpenseModel = mongoose.model("totalaccExpense", totalaccExpense);
