import { validationResult } from "express-validator";
import { sellDowlandPdfService } from "../../../service/admin/sell/sellDowlandPdfService.js";
import url from "url";
import path from "path";

export async function SellDowlandPdfController(req, res) {
  try {
    // res.download(__dirname + "/pdf/Pavan.pdf");
    const url1 = url.parse(req.url, true);
    req.gte = url1.query.gte;
    req.lte = url1.query.lte;

    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const response = await sellDowlandPdfService(req);
      // console.log(response);
      // res.dowland(__dirname + "/pdf/Pavan.pdf");
      // console.log(path.resolve("./pdf/Pavan.pdf"));
      // res.attachment(response);

      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
