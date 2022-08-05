import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";
import { addPurchaseModel } from "../../../scema/admin/purchase/addPurchase-scema.js";

export async function addPurchaseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      let data = new addPurchaseModel(input);
      console.log(input);
      let data1 = await data.save();
      if (data1 !== "") {
        let backupLog = {};
        backupLog = {
          Activity: "Add Purchase",
          Time: Date(),
          data: data1,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: input.logId },
          { $push: { log: backupLog } },
          { new: true }
        );
        if (log) {
          resole("Purchase Added");
        } else {
          reject("Purchase not add please try again");
        }
      } else {
        reject("Purchase not add please try again");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
