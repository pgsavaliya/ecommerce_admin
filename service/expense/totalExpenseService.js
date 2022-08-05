import { totalExpenseModel } from "../../scema/admin/expense/totalExpense-scema.js";
import Mongoose from "mongoose";

export async function totalExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.month == 0) {
        var reasult = await totalExpenseModel.aggregate([
          {
            $group: { _id: null, amount: { $sum: "$amount" } },
          },
        ]);
      } else {
        var reasult = await totalExpenseModel.aggregate([
          {
            $match: {
              createdAt: {
                $gte: input.month,
              },
            },
          },
          {
            $group: { _id: null, amount: { $sum: "$amount" } },
          },
        ]);
      }
      console.log(input.accId);

      if (reasult != "") {
        reasult = reasult[0];
        resole(reasult);
      } else {
        reject("amount Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
