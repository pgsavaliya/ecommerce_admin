import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";
import { addCategoryExpenseModel } from "../../scema/admin/expense/addCategoryExpense-scema.js";

export async function addCategoryExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      let data = new addCategoryExpenseModel(input);
      let data1 = await data.save();
      if (data1 !== "") {
        let backupLog = {};
        backupLog = {
          Activity: "Add Category",
          Time: Date(),
          data: data1,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: input.logId },
          { $push: { log: backupLog } },
          { new: true }
        );
        if (log) {
          resole(data1);
        } else {
          reject("Category not add please try again");
        }
      } else {
        reject("Category not add please try again");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
