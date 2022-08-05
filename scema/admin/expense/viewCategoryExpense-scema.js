import mongoose from "mongoose";
const viewCategoryExpense = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "categoryofExpense",
    timestamps: true,
  }
);
export const viewCategoryExpenseModel = mongoose.model("viewCategoryExpense", viewCategoryExpense);
