
import Mongoose from "mongoose";

import { updateaccExpenseModel } from "../../../scema/admin/accexpense/updateaccExpense-scema.js";
import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";

export async function updateaccExpenseService(body, _id) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(_id)

      body.updatedadminId = body.adminId;
      delete body.adminId
      // resole({message:body})
      var reasult = await updateaccExpenseModel.findByIdAndUpdate(_id, body, {
        new: true,
      });
        if (reasult) {
          let backupLog = {};
          backupLog = {
            Activity: "Update Account Expense",
            Time: Date(),
            data: reasult,
          };
          var log = await backupLogModel.findByIdAndUpdate(
            { _id: body.logId },
            { $push: { log:backupLog } },
            { new: true }
          );
          if (log) {
          resole({ status: 200, message: "Update Account Expense" });
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
