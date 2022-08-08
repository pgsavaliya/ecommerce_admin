import express from "express";
import { addPurchaseController } from "../../controller/admin/purchase/addPurchase-controller.js";
import { purchaseDowlandPdfController } from "../../controller/admin/purchase/purchaseDowlandPdf-controller.js";
import { totalPurchaseController } from "../../controller/admin/purchase/totalPurchase-controller.js";
import { viewPurchaseController } from "../../controller/admin/purchase/viewPurchase-controller.js";
import { check_admin_token, check_admin_token_url } from "../../middleware/admin/check_admin_token.js";


const purchaseRoute = express();

purchaseRoute.get("/", (req, res) => {
    res.status(200).json({ message: "sell route is working" });
});

purchaseRoute.post("/addPurchase" ,check_admin_token,addPurchaseController)
purchaseRoute.get("/viewPurchase",check_admin_token_url,viewPurchaseController)
purchaseRoute.get("/dowlandPurchasePdf", check_admin_token_url ,purchaseDowlandPdfController);
purchaseRoute.get("/totalPurchase",check_admin_token_url,totalPurchaseController)

export default purchaseRoute;
