import {
  filetransfer,
  removespace,
} from "../../../otherFunction/filetojson.js";
import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js";
import { sellfileModel } from "../../../scema/admin/sell/sell-file-scema.js";

export async function sellfileService(input) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input.body.accId);
      let jsondata = await filetransfer("./files/" + input.file.filename);

      jsondata.forEach((obj) => {
        Object.entries(obj).forEach((entry) => {
          const [key, value] = entry;
          var replacedKey = key.trim().replace(/ /g, "_");

          if (key !== replacedKey) {
            obj[replacedKey] = obj[key];
            delete obj[key];
          }
        });
      });
      let data2 = [];
      // console.log(input.accId);
      // console.log(jsondata);

      if (input.body.accId) {
        for (let i = 0; i < jsondata.length; i++) {
          jsondata[i].accId = input.body.accId;
          jsondata[i].adminId = input.body.adminId;
          jsondata[i].updatedadminId = input.body.updatedadminId;
          const data1 = await sellfileModel.findOneAndReplace(
            { Order_ID: jsondata[i].Order_ID },
            jsondata[i],
            { upsert: true }
          );
          // console.log(data1)
          data2[i] = data1;
        }
        // let data = new sellfileModel(input);
        // let data1 = await data.save();
        if (data2 != "") {
          let backupLog = {};
          backupLog = {
            Activity: "Add Sell using file",
            Time: Date(),
            data: data2,
          };

          var log = await backupLogModel.findByIdAndUpdate(
            { _id: input.logId },
            { $push: { log: backupLog } },
            { new: true }
          );
          // console.log(log)
          if (log) {
            resole("Sell is added");
          } else {
            reject("Sell not add please try again");
          }
        } else {
          reject("Sell not add please try again");
        }
      } else {
        reject("AccId is require");
      }
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
