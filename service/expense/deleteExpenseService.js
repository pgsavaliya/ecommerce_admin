
import mongoose from "mongoose";
import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";

import {
  backupExpenseModel,
  deleteExpenseModel,
} from "../../scema/admin/expense/deleteExpense-scema.js";

export async function deleteExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      var reasult = await deleteExpenseModel
        .findOne(
          { _id: input.expenseId },
          { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
        )
        .lean();
      if (reasult) {
        reasult.delatedadminId = input.adminId;

        // console.log(reasult);
        let data = new backupExpenseModel(reasult);
        let data1 = await data.save();

        let deletedata = await deleteExpenseModel.deleteOne({
          _id: input.expenseId,
        });

        if (deletedata) {
          let backupLog = {};
          backupLog = {
            Activity: "Delete Expense",
            Time: Date(),
            data: data1,
          };
          var log = await backupLogModel.findByIdAndUpdate(
            { _id: input.logId },
            { $push: { log: backupLog } },
            { new: true }
          );
          if (log) {
            resole("Expense mve to backup");
          } else {
            reject("Expense not move please try again");
          }
        } else {
          reject("Expense not move please try again");
        }
      } else {
        reject("Expense Not Found");
      }
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
