import { updateExpenseModel } from "../../scema/admin/expense/updateExpense-scema.js";
import Mongoose from "mongoose";
import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";

export async function updateExpenseService(body, _id) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(_id)

      body.updatedadminId = body.adminId;
      delete body.adminId
      // resole({message:body})
      var reasult = await updateExpenseModel.findByIdAndUpdate(_id, body, {
        new: true,
      });
        if (reasult) {
          let backupLog = {};
          backupLog = {
            Activity: "Update Expense",
            Time: Date(),
            data: reasult,
          };
          var log = await backupLogModel.findByIdAndUpdate(
            { _id: body.logId },
            { $push: { log:backupLog } },
            { new: true }
          );
          if (log) {
          resole({ status: 200, message: "Update Expense" });
          } else {
            reject("Expense not Update please try again");
          }
      } else {
        reject({ status: 404, message: "something went wrong!!" });
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
