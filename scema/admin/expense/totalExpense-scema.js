import mongoose from "mongoose";
const totalExpense = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "Expense",
    timestamps: true,
  }
);
export const totalExpenseModel = mongoose.model("totalExpense", totalExpense);
