import mongoose from "mongoose";
const updateCategoryExpense = new mongoose.Schema(
  {
    updatedadminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    categoryname:{
      type:String,
    },
  },
  {
    collection: "categoryofExpense",
    timestamps: true,
  }
);
export const updateCategoryExpenseModel = mongoose.model("updateCategoryExpense", updateCategoryExpense);
