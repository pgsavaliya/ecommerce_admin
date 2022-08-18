import express from "express";
import { addEcommAccController } from "../../controller/admin/Ecomm/addEcomm-controller.js";
import { viewAccountController } from "../../controller/admin/Ecomm/viewAccount-controller.js";
import { adminloginController } from "../../controller/admin/login-controller.js";
import { totalhomeProfitController } from "../../controller/admin/totalhomeProfit-controller.js";
import { totalProfitController } from "../../controller/admin/totalProfit-controller.js";
import {
  check_admin_token,
  check_admin_token_url,
} from "../../middleware/admin/check_admin_token.js";

import purchaseRoute from "../purchase/PurchaseRoute.js";
import accexpenseRoute from "./accExpense/AccExpenseRoute.js";
import expenseRoute from "./expense/ExpenseRoute.js";
import sellRoute from "./sell/SellRoute.js";
import { viewbackuplogController } from "../../controller/admin/viewbackuplog-controller.js";
import { ipController } from "../../controller/admin/ip.js";
const adminRoute = express();
adminRoute.use(express.json());

adminRoute.get("/", (req, res) => {
  // res.download(__dirname + "/pdf/Pavan.pdf");
  res.status(200).json({ message: "admin route is working" });
});
adminRoute.post("/newEcommAcc", check_admin_token, addEcommAccController);
adminRoute.get("/viewAccount", check_admin_token_url, viewAccountController);
adminRoute.post("/login", adminloginController);
adminRoute.use("/expense", expenseRoute);
adminRoute.use("/accExpense", accexpenseRoute);
adminRoute.use("/sell", sellRoute);
adminRoute.get("/ips", ipController);
adminRoute.use("/purchase", purchaseRoute);
adminRoute.get("/accprofit", check_admin_token_url, totalProfitController);
adminRoute.get(
  "/totalprofit",
  check_admin_token_url,
  totalhomeProfitController
);
adminRoute.get("/viewbackuplog", check_admin_token, viewbackuplogController);

export default adminRoute;
