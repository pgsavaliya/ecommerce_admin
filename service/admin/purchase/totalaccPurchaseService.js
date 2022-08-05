import mongoose from "mongoose";
import { currencyConverter } from "../../../otherFunction/currancy-transfer.js";
import { totalPurchaseModel } from "../../../scema/admin/purchase/totalPurchase-scema.js";
import { viewSellModel } from "../../../scema/admin/sell/viewSell-scema.js";

export async function totalaccPurchaseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(input.month);
      if (input.month == 0) {
        if (input.accId) {
          var reasult = await totalPurchaseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
              },
            },
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        } else {
          // console.log(input.month);
          var reasult = await totalPurchaseModel.aggregate([
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        }
      } else {
        if (input.accId) {
          var reasult = await totalPurchaseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
                createdAt: {
                  $gte: input.month,
                },
              },
            },
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        } else {
          // console.log(input.month);
          var reasult = await totalPurchaseModel.aggregate([
            {
              $match: {
                createdAt: {
                  $gte: input.month,
                },
              },
            },
            {
              $group: { _id: null, amount: { $sum: "$amount" } },
            },
          ]);
        }
      }

      // let totalSell = reasult[0].amount;
      // // console.log(totalSell);
      // if (totalSell != 0) {
      //   var reasult1 = await viewSellModel.findOne();
      //   let Currency = reasult1._doc.Currency;
      //   let convetedCurrency = await currencyConverter(
      //     Currency,
      //     "INR",
      //     totalSell
      //   );

      //   reasult = reasult[0];
      //   // console.log(reasult)
      //   reasult.indCurrency = convetedCurrency;
      // }

      if (reasult != "") {
        // console.log(input.accId);
        reasult = reasult[0];
        resole(reasult);
      } else {
        reasult.amount = 0;
        resole(reasult);
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
