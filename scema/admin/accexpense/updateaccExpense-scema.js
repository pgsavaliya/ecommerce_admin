import mongoose from "mongoose";
const updateaccExpense = new mongoose.Schema(
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
    accId:{
      type: mongoose.Schema.Types.ObjectId,
    }
  },
  {
    collection: "AccExpense",
    timestamps: true,
  }
);
export const updateaccExpenseModel = mongoose.model("updateaccExpense", updateaccExpense);
