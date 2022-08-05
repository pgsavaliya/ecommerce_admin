import mongoose from "mongoose";
const viewExpense = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "Expense",
    timestamps: true,
  }
);
export const viewExpenseModel = mongoose.model("viewExpense", viewExpense);
