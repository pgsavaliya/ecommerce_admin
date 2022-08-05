import { backupLogModel } from "../../../scema/admin/backuplog/backuplog-scema.js"
import { addEcommModel } from "../../../scema/admin/Ecomm/addEcomm-scema.js";


function date() {
  let d = new Date();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let year = d.getFullYear();
  let curDate = year + "-" + month + "-" + date;
  return curDate;
}

export async function addEcommAccService(input) {
  return new Promise(async (resole, reject) => {
    try {
      input.createDate = date();
      // resole(input)
      let data = new addEcommModel(input);
      let data1 = await data.save();
      if (data1 !== "") {
        let backupLog = {};
        backupLog = {
          Activity: "Add Ecommerce Account",
          Time: Date(),
          data: data1,
        };
        var log = await backupLogModel.findByIdAndUpdate(
          { _id: input.logId },
          { $push: { log:backupLog } },
          { new: true }
        );
        if (log) {
          resole("Account Registered");
        } else {
          reject("Account is not Registred, try again");
        }
      } else {
        reject("Account is not Registred, try again");
      }
    } catch (e) {
      // console.log(e.code);
      
        reject("Something is worng" + e);
      
    }
  });
}
