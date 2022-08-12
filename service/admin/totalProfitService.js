import Mongoose from "mongoose";
import { totalaccExpenseService } from "./accexpense/totalaccExpenseService.js";
import { totalaccPurchaseService } from "./purchase/totalaccPurchaseService.js";
import { totalSellService } from "./sell/totalSellService.js";

export async function totalProfitService(input) {
  // console.log(input);
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        input.month = 0;
      } else {
        let month = new Date();
        month.setMonth(month.getMonth() - input.timming);
        input.month = month;
      }

      let Purchase = await totalaccPurchaseService(input);
      let accExpense = await totalaccExpenseService(input);
      let Sell = await totalSellService(input);

      // let Profit = 0;
      const Profit = Sell.Order_Net - Purchase.amount - accExpense.amount;
      // const Sell1 = ;
      // const Expense1  =
      // console.log(Profit);
      // console.log("mihir ss", Sell instanceof Array);
      if (Sell == "") {
        Sell = 0;
      }
      // console.log("sell", Sell);
      if (accExpense == "") {
        accExpense = 0;
      }
      if (Purchase == "") {
        Purchase = 0;
      }
      if (Profit == "") {
        Profit = 0;
      }

      resole({ Sell, accExpense, Purchase, Profit });
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
