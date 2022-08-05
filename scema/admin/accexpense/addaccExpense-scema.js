import mongoose from "mongoose";
const addaccExpense = new mongoose.Schema(
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
    updatedadminId:{
      type: mongoose.Schema.Types.ObjectId,
    },
    accId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "AccExpense",
    timestamps: true,
  }
);
export const addaccExpenseModel = mongoose.model("addaccExpense", addaccExpense);
