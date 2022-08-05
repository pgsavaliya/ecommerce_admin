import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";
import { addSellModel } from "../../../scema/admin/sell/addSell-scema.js";

export async function addSellService(input) {
  return new Promise(async (resole, reject) => {
    try {
      // let data = new addSellModel(input);
      // let data1 = await data.save();
      // input.accId = "62e77b04f0199e011d61c478"

      if (input.accId) {
        const data1 = await addSellModel.findOneAndReplace(
          { Order_ID: input.Order_ID },
          input,
          { upsert: true }
        );
        if (data1 !== "") {
          let backupLog = {};
          backupLog = {
            Activity: "Add Sell",
            Time: Date(),
            data: data1,
          };
          var log = await backupLogModel.findByIdAndUpdate(
            { _id: input.logId },
            { $push: { log: backupLog } },
            { new: true }
          );
          if (log) {
            resole("Sell Added", data1);
          } else {
            reject("Sell not add please try again");
          }
        } else {
          reject("Sell not add please try again");
        }
      } else {
        reject("Account Id is require");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
