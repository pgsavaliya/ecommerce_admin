import mongoose from "mongoose";
import { viewbackuplogModel } from "../../scema/admin/backuplog/viewBcakuplog-scema.js";

export async function viewbackuplogService(input) {
  return new Promise(async (resole, reject) => {
    try {
      var reasult = await viewbackuplogModel.aggregate([
        {
          $match: {
            adminId: mongoose.Types.ObjectId(input),
          },
        },
        {
          $project: {
            __v: 0,
          },
        },
      ]);
      if (reasult != "") {
        resole(reasult);
      } else {
        reject("backup log Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
