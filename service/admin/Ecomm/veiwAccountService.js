import Mongoose from "mongoose";
import { viewAccountModel } from "../../../scema/admin/Ecomm/viewAccount-scema.js";

export async function viewAccountService(input) {
  return new Promise(async (resole, reject) => {
    try {
      var reasult = await viewAccountModel.aggregate([
        {
          $project: {
            __v: 0,
          },
        },
      ]);
      if (reasult != "") {
        resole(reasult);
      } else {
        reject("Account Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
