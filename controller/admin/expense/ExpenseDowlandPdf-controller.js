import { validationResult } from "express-validator";
import url from "url";
import path from "path";
import { PassThrough } from "stream";
import { expenseDowlandPdfService } from "../../../service/expense/expenseDowlandPdfService.js";

export async function ExpenseDowlandPdfController(req, res) {
  try {
    
    const url1 = url.parse(req.url, true);
    req.startdate = url1.query.startdate;
    req.enddate = url1.query.enddate;
      const response = await expenseDowlandPdfService(req);
      if(response)
      {
      res.download(path.join(dirname,"/pdf/ItCodeHelpexpense.pdf"));
      }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
