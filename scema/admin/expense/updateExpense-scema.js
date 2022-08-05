import mongoose from "mongoose";
const updateExpense = new mongoose.Schema(
  {
    updatedadminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    amount:{
      type:Number,
    },
    description:{
      type:String,
    },
    categoryId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "Expense",
    timestamps: true,
  }
);
export const updateExpenseModel = mongoose.model("updateExpense", updateExpense);
