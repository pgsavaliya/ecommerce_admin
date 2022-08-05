import jwt from "jsonwebtoken";
import env from "dotenv";
import { adminLoginmodel } from "../../scema/admin/login-scema.js";
import { backupLogModel } from "../../scema/admin/backuplog/backuplog-scema.js";

env.config();
var backupLog = {};
export async function adminloginService(input) {
  return new Promise(async (resole, reject) => {
    try {
      console.log(input);
      let reasult = await adminLoginmodel.aggregate([
        {
          $match: {
            email: input.email,
            password: input.password,
          },
        },
      ]);
      // console.log(reasult);
      if (reasult == "") {
        // console.log(reasult)
        reject({ status: 404, message: "enter valid adminId and Password" });
      } else {
        // console.log(reasult[0]._id);
        backupLog.adminId = reasult[0]._id;
        backupLog.log = {
          Activity: "Login",
          Time: Date(),
        };
        let log = new backupLogModel(backupLog);
        let log1 = await log.save();
        if (log1 !== "") {
          let token = jwt.sign(
            {
              adminId: reasult[0]._id,
              password: reasult[0].password,
              logId: log1._id,
            },
            process.env.ADMIN_KEY,
            { expiresIn: "1d" }
          );
          resole({ status: 200, token: token, message: log1._id });
        } else {
          reject({ status: 500, message: "log not saved" });
        }
      }
    } catch (e) {
      console.log(e);
      reject({ status: 500, message: "Something is worng " + e });
    }
  });
}
