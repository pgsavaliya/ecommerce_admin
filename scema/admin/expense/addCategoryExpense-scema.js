import mongoose from "mongoose";
const addCategoryExpense = new mongoose.Schema(
  {
    categoryname:{
      type:String
    },
    adminId:{
      type:mongoose.Schema.Types.ObjectId
    },
    updatedadminId:{
      type:mongoose.Schema.Types.ObjectId
    }
  },
  { collection: "categoryofExpense",
      timestamps:true  
  }
);
export const addCategoryExpenseModel = mongoose.model("addCategoryExpense", addCategoryExpense);
