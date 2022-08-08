import { validationResult } from "express-validator";
import { sellDowlandPdfService } from "../../../service/admin/sell/sellDowlandPdfService.js";
import url from "url";
import path from "path";
import { PassThrough } from "stream";

export async function SellDowlandPdfController(req, res) {
  try {
    
    const url1 = url.parse(req.url, true);
    req.startdate = url1.query.startdate;
    req.enddate = url1.query.enddate;
      const response = await sellDowlandPdfService(req);
      if(response)
      {
      res.download(path.join(dirname,"/pdf/ItCodeHelpSell.pdf"));
      }
    
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
