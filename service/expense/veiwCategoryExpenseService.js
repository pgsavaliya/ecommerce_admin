import { viewCategoryExpenseModel } from "../../scema/admin/expense/viewCategoryExpense-scema.js";
import Mongoose from "mongoose";

export async function viewCategoryExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        var reasult = await viewCategoryExpenseModel.aggregate([
          {
            $match: {
              categoryname: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $project: {
              adminId: 0,
              __v: 0,
            },
          },
        ]);
      } else {
        let date1 = new Date();
        date1.setMonth(date1.getMonth() - input.timming);
        var reasult = await viewCategoryExpenseModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: date1,
              },

              categoryname: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $project: {
              adminId: 0,
              __v: 0,
            },
          },
        ]);
      }

      if (reasult != "") {
        resole(reasult);
      } else {
        reject("Category Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
