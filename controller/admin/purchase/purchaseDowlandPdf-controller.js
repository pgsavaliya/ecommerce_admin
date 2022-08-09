import { validationResult } from "express-validator";
import url from "url";
import path from "path";
import { PassThrough } from "stream";
import { purchaseDowlandPdfService } from "../../../service/admin/purchase/purchaseDowlandPdfService.js";

export async function purchaseDowlandPdfController(req, res) {
  try {
    const url1 = url.parse(req.url, true);
    req.startdate = url1.query.startdate;
    req.enddate = url1.query.enddate;
    req.accId = url1.query.accId;
    const response = await purchaseDowlandPdfService(req);
    if (response == 1) {
      // res.send("ghdkf")
      res.download(path.join(dirname, "/pdf/ItCodeHelppurchase.pdf"));
    } else {
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
