
import mongoose from "mongoose";
import { deleteaccExpenseModel,backupaccExpenseModel } from "../../../scema/admin/accexpense/deleteaccExpense-scema.js";
import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";



export async function deleteaccExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input.accexpenseId)

      var reasult = await deleteaccExpenseModel
        .findOne(
          { _id: input.accexpenseId },
          { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
        )
        .lean();
      if (reasult) {
        reasult.delatedadminId = input.adminId;

        // console.log(reasult);
        let data = new backupaccExpenseModel(reasult);
        let data1 = await data.save();

        let deletedata = await deleteaccExpenseModel.deleteOne({
          _id: input.accexpenseId,
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
            resole("Acc Expense move to backup");
          } else {
            reject("Acc Expense not move please try again");
          }
        } else {
          reject("Acc Expense not move please try again");
        }
      } else {
        reject("Acc Expense Not Found");
      }
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
