import { validationResult } from "express-validator";
import url from "url";
import path from "path";
import { PassThrough } from "stream";
import { expenseDowlandPdfService } from "../../../service/expense/expenseDowlandPdfService.js";
import { accexpenseDowlandPdfService } from "../../../service/admin/accexpense/accexpenseDowlandPdfService.js";

export async function accExpenseDowlandPdfController(req, res) {
  try {
    const url1 = url.parse(req.url, true);
    req.startdate = url1.query.startdate;
    req.enddate = url1.query.enddate;
    req.accId = url1.query.accId;
    const response = await accexpenseDowlandPdfService(req);
    if (response) {
      res.download(path.join(dirname, "/pdf/ItCodeHelpaccexpense.pdf"));
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
