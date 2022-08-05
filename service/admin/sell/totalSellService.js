import mongoose from "mongoose";
import { currencyConverter } from "../../../otherFunction/currancy-transfer.js";
import { totalSellModel } from "../../../scema/admin/sell/totalSell-scema.js";
import { viewSellModel } from "../../../scema/admin/sell/viewSell-scema.js";

export async function totalSellService(input) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input);
      if (input.month == 0) {
        if (input.accId) {
          var reasult = await totalSellModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
              },
            },
            {
              $group: { _id: null, Order_Net: { $sum: "$Order_Net" } },
            },
          ]);
          // console.log(reasult);

          // console.log();
        } else {
          var reasult = await totalSellModel.aggregate([
            {
              $group: { _id: null, Order_Net: { $sum: "$Order_Net" } },
            },
          ]);
        }
      } else {
        if (input.accId) {
          var reasult = await totalSellModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
                createdAt: {
                  $gte: input.month,
                },
              },
            },
            {
              $group: { _id: null, Order_Net: { $sum: "$Order_Net" } },
            },
          ]);
          // console.log(reasult);

          // console.log();
        } else {
          var reasult = await totalSellModel.aggregate([
            {
              $match: {
                createdAt: {
                  $gte: input.month,
                },
              },
            },
            {
              $group: { _id: null, Order_Net: { $sum: "$Order_Net" } },
            },
          ]);
        }
      }

      if (reasult == "") {
        // reasult = reasul;
        reasult.Order_Net = 0;
        reasult.totalSell = 0;
        // console.log("reasult is:", reasult);
      } else {
        reasult = reasult[0];
        // var totalSell = 0;
        // var totalSell = reasult[0].Order_Net;
        // var reasult1 = await viewSellModel.findOne();
        // let Currency = reasult1._doc.Currency;
        // let convetedCurrency = await currencyConverter(
        //   Currency,
        //   "INR",
        //   totalSell
        // );
        // reasult = reasult[0];
        // console.log(convetedCurrency);
        // reasult.indCurrency = convetedCurrency;
      }

      resole(reasult);
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
