

import { addaccExpenseModel } from "../../../scema/admin/accexpense/addaccExpense-scema.js";
import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";



export async function addaccExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      let data = new addaccExpenseModel(input);
      console.log(input.accId)
      let data1 = await data.save();
      if (data1 !== "") {
        let backupLog = {};
        backupLog = {
          Activity: "Add Acc Expense",
          Time: Date(),
          data: data1,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: input.logId },
          { $push: { log:backupLog } },
          { new: true }
        );
        if (log) {
        resole("Account Expense Added");
        } else {
          reject("Account Expense not add please try again");
        }
      }
      else {
        reject("Account Expense not add please try again");
      }
    } catch (e) {
        reject("Something is worng" + e);
    }
  });
}
