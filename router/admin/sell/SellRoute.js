import express from "express";
import { addSellController } from "../../../controller/admin/sell/addSell-controller.js";
import { SellDowlandPdfController } from "../../../controller/admin/sell/SellDowlandPdf-controller.js";
import { sellfileController } from "../../../controller/admin/sell/sellFile-controller.js";
import { totalSellController } from "../../../controller/admin/sell/totalSell-controller.js";
import { viewSellController } from "../../../controller/admin/sell/viewSell-controller.js";
import {
  check_admin_token,
  check_admin_token_url,
} from "../../../middleware/admin/check_admin_token.js";
import { upload } from "../../../middleware/admin/fileupload.js";

const sellRoute = express();

sellRoute.get("/", (req, res) => {
  // res.download(__dirname + "/pdf/Pavan.pdf");
  res.status(200).json({ message: "sell route is working" });
});

sellRoute.post(
  "/uploadsellfile",
  check_admin_token,
  upload.single("file1"),
  sellfileController
);
sellRoute.get("/totalSell", check_admin_token_url, totalSellController);
sellRoute.get("/totalaccSell", check_admin_token_url, totalSellController);
sellRoute.get("/viewSell", check_admin_token_url, viewSellController);
sellRoute.get(
  "/dowlandSellPdf",
  check_admin_token_url,
  SellDowlandPdfController
);
sellRoute.post("/addOneSell", check_admin_token, addSellController);

export default sellRoute;
