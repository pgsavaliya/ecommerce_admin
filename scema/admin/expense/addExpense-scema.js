import mongoose from "mongoose";
const addExpense = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    description: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    updatedadminId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "Expense",
    timestamps: true,
  }
);
export const addExpenseModel = mongoose.model("addExpense", addExpense);
