import env from "dotenv";
import { accLoginmodel } from "../../scema/admin/acclogin-scema.js";

env.config();
var backupLog = {};
export async function accloginService(input) {
  return new Promise(async (resole, reject) => {
    try {
      let reasult = await accLoginmodel.find(input);
      if (reasult != "") {
        // console.log(reasult)
        reject({ status: 404, message: "something was worng" });
      } else {
        // console.log(reasult)
        resole({ message: reasult });
      }
    } catch (e) {
      console.log(e);
      reject({ status: 500, message: "Something is worng " + e });
    }
  });
}
