import { updateCategoryExpenseModel } from "../../scema/admin/expense/updateCategoryExpense-scema.js";
import Mongoose from "mongoose";
import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";

export async function updateCategoryExpenseService(body, _id) {
  return new Promise(async (resole, reject) => {
    try {
      body.updatedadminId = body.adminId;
      var reasult = await updateCategoryExpenseModel.findByIdAndUpdate(_id, body, {
        new: true,
      });
      if (reasult) {
        let backupLog = {};
        backupLog = {
          Activity: "Update Expense Category",
          Time: Date(),
          data: reasult,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: body.logId },
          { $push: { log:backupLog } },
          { new: true }
        );
        if (log) {
        resole({ status: 200, message: "Update Expense Category" });
        } else {
          reject("Expense Category not Update please try again");
        }
      } else {
        reject({ status: 404, message: "something went wrong!!" });
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
