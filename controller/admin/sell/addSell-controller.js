import { validationResult } from "express-validator";
import { addSellService } from "../../../service/admin/sell/addSellService.js";
import url from "url";

export async function addSellController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const url1 = url.parse(req.url, true);
      req.body.accId = url1.query.accId;
      req.body.updatedadminId = req.body.adminId;
      // console.log(" sfsajbf", req.body.accId);
      const response = await addSellService(req.body);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
