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
    // res.type('application/pdf');
    // res.send("/pdf/Pavan.pdf");

    // console.log(req);
    // const errors = validationResult(req);
    
    // console.log(dirname);
      const response = await sellDowlandPdfService(req);
      // console.log(response);
      // console.log(path.resolve("./pdf/Pavan.pdf"));
      // res.attachment(response);
      if(response)
      {
      res.download(path.join(dirname,"/pdf/ItCodeHelpSell.pdf"));
      // res.send(response);
      }
    
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
