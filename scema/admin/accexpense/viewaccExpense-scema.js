import mongoose from "mongoose";
const viewaccExpense = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "AccExpense",
    timestamps: true,
  }
);
export const viewaccExpenseModel = mongoose.model("viewaccExpense", viewaccExpense);
