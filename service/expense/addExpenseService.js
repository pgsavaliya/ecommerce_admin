

import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";
import { addExpenseModel } from "../../scema/admin/expense/addExpense-scema.js";


export async function addExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      let data = new addExpenseModel(input);
      let data1 = await data.save();
      if (data1 !== "") {
        let backupLog = {};
        backupLog = {
          Activity: "Add Expense",
          Time: Date(),
          data: data1,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: input.logId },
          { $push: { log:backupLog } },
          { new: true }
        );
        if (log) {
        resole("Expense Added");
        } else {
          reject("Expense not add please try again");
        }
      }
      else {
        reject("Expense not add please try again");
      }
    } catch (e) {
        reject("Something is worng" + e);
    }
  });
}
