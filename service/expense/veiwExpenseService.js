import { viewExpenseModel } from "../../scema/admin/expense/viewExpense-scema.js";
import Mongoose from "mongoose";

export async function viewExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        var reasult = await viewExpenseModel.aggregate([
          {
            $match: {
              description: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $lookup: {
              from: "categoryofExpense",
              localField: "categoryId",
              foreignField: "_id",
              as: "category_data",
            },
          },
          {
            $project: {
              adminId: 0,
              updatedadminId: 0,
              __v: 0,
            },
          },
        ]);
      } else {
        let date1 = new Date();
        date1.setMonth(date1.getMonth() - input.timming);

        // console.log(reasult);
        var reasult = await viewExpenseModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: date1,
              },
              description: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $lookup: {
              from: "categoryofExpense",
              localField: "categoryId",
              foreignField: "_id",
              as: "category_data",
            },
          },
          { $unwind: "$category_data" },
          {
            $project: {
              adminId: 0,
              updatedadminId: 0,
              __v: 0,
            },
          },
        ]);
      }

      // console.log(reasult);
      if (reasult != "") {
        resole(reasult);
      } else {
        resole("Expense Not Found");
      }
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
