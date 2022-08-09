import Mongoose from "mongoose";
import { totalExpenseService } from "../expense/totalExpenseService.js";
import { totalaccExpenseService } from "./accexpense/totalaccExpenseService.js";
import { totalaccPurchaseService } from "./purchase/totalaccPurchaseService.js";
import { totalSellService } from "./sell/totalSellService.js";

export async function totalhomeProfitService(input) {
  // console.log(input.timming);
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        input.month = 0;
      } else {
        let month = new Date();
        month.setMonth(month.getMonth() - input.timming);
        input.month = month;
      }

      const Purchase = await totalaccPurchaseService(input);
      const Expense = await totalExpenseService(input);
      const Sell = await totalSellService(input);
      const accExpense = await totalaccExpenseService(input);
      console.log(Expense);
      const Profit =
        Sell.Order_Net - Purchase.amount - Expense.amount - accExpense.amount;

      resole({ Sell, Expense, Purchase, accExpense, Profit });
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
