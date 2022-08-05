import express from "express";
import { addCategoryExpenseController } from "../../../controller/admin/expense/addCategoryExpense-controller.js";
import { addExpenseController } from "../../../controller/admin/expense/addExpense-controller.js";
import { deleteExpenseController } from "../../../controller/admin/expense/deleteExpense-controller.js";
import { totalExpenseController } from "../../../controller/admin/expense/totalExpense-controller.js";
import { updateCategoryExpenseController } from "../../../controller/admin/expense/updateCategoryExpense-controller.js";
import { updateExpenseController } from "../../../controller/admin/expense/updateExpense-controller.js";
import { viewCategoryExpenseController } from "../../../controller/admin/expense/viewCategoryExpense-controller.js";
import { viewExpenseController } from "../../../controller/admin/expense/viewExpense-controller.js";
import {
  check_admin_token,
  check_admin_token_url,
} from "../../../middleware/admin/check_admin_token.js";

const expenseRoute = express();

expenseRoute.get("/", (req, res) => {
  res.status(200).json({ message: "expense route is working" });
});

expenseRoute.post(
  "/addexpensecategory",
  check_admin_token,
  addCategoryExpenseController
);
expenseRoute.post("/addexpense", check_admin_token, addExpenseController);
expenseRoute.get(
  "/viewCategoryExpense",
  check_admin_token_url,
  viewCategoryExpenseController
);
expenseRoute.get("/viewExpense", check_admin_token_url, viewExpenseController);
expenseRoute.post("/updateExpense", check_admin_token, updateExpenseController);
expenseRoute.post(
  "/updateCategoreExpense",
  check_admin_token,
  updateCategoryExpenseController
);
expenseRoute.get(
  "/deleteExpense",
  check_admin_token_url,
  deleteExpenseController
);
expenseRoute.get(
  "/totalexpense",
  check_admin_token_url,
  totalExpenseController
);

export default expenseRoute;
