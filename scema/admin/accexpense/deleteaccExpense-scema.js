import mongoose from "mongoose";
const deleteaccExpense = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "AccExpense",
    timestamps: true,
  }
);
export const deleteaccExpenseModel = mongoose.model("deleteaccExpense", deleteaccExpense);


const backupaccExpense = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    description: {
      type: String,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    delatedadminId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "backupAcc-Expense",
    timestamps: true,
  }
);
export const backupaccExpenseModel = mongoose.model("backupaccExpense", backupaccExpense);

