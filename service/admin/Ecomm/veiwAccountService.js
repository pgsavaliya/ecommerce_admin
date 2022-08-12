import Mongoose from "mongoose";
import { viewAccountModel } from "../../../scema/admin/Ecomm/viewAccount-scema.js";
import { totalProfitService } from "../totalProfitService.js";

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
        var profit = await Promise.all(
          reasult.map((item) => {
            return new Promise(async (res, rej) => {
              // console.log(item._id);
              let Profit = await totalProfitService(item._id);
              item.profit = Profit.Profit;
              res(Profit);
            });
          })
        );
        console.log(profit);
        resole(reasult);
      } else {
        reject("Account Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
