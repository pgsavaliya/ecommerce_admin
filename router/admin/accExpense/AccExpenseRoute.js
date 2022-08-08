import express from "express";
import { accExpenseDowlandPdfController } from "../../../controller/admin/accexpense/accExpenseDowlandPdf-controller.js";
import { addaccExpenseController } from "../../../controller/admin/accexpense/addaccExpense-controller.js";
import { deleteaccExpenseController } from "../../../controller/admin/accexpense/deleteaccExpense-controller.js";
import { totalaccExpenseController } from "../../../controller/admin/accexpense/totalaccExpense-controller.js";
import { updateaccExpenseController } from "../../../controller/admin/accexpense/updateaccExpense-controller.js";
import { viewaccExpenseController } from "../../../controller/admin/accexpense/viewaccExpense-controller.js";


import { check_admin_token, check_admin_token_url } from "../../../middleware/admin/check_admin_token.js";



const accexpenseRoute = express();

accexpenseRoute.get("/", (req, res) => {
    res.status(200).json({ message: "acc expense route is working" });
});

accexpenseRoute.post("/addaccexpense",check_admin_token,addaccExpenseController)
accexpenseRoute.get("/viewaccExpense",check_admin_token_url,viewaccExpenseController)
accexpenseRoute.post("/updateaccExpense",check_admin_token,updateaccExpenseController)
accexpenseRoute.get("/deleteaccExpense",check_admin_token_url, deleteaccExpenseController)
accexpenseRoute.get("/totalaccexpense",check_admin_token_url,totalaccExpenseController)
accexpenseRoute.get("/dowlandaccExpensePdf", check_admin_token_url ,accExpenseDowlandPdfController);



export default accexpenseRoute;
