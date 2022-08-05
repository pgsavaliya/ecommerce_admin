import mongoose from "mongoose";
const deleteExpense = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "Expense",
    timestamps: true,
  }
);
export const deleteExpenseModel = mongoose.model("deleteExpense", deleteExpense);


const backupExpense = new mongoose.Schema(
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
    delatedadminId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "backup-Expense",
    timestamps: true,
  }
);
export const backupExpenseModel = mongoose.model("backupExpense", backupExpense);

