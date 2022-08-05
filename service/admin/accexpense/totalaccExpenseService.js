import mongoose from "mongoose";
import { totalaccExpenseModel } from "../../../scema/admin/accexpense/totalaccExpense-scema.js";

export async function totalaccExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.month == 0) {
        if (input.accId) {
          var reasult = await totalaccExpenseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
              },
            },
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        } else {
          var reasult = await totalaccExpenseModel.aggregate([
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        }
      } else {
        if (input.accId) {
          var reasult = await totalaccExpenseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
                createdAt: {
                  $gte: input.month,
                },
              },
            },
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        } else {
          var reasult = await totalaccExpenseModel.aggregate([
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
      }

      if (reasult != "") {
        reasult = reasult[0];
        resole(reasult);
      } else {
        reasult.amount = 0;
        resole(reasult);
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
