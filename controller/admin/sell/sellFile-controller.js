import { validationResult } from "express-validator";
import { sellfileService } from "../../../service/admin/sell/sell-file-Service.js";

export async function sellfileController(req, res) {
  try {
    console.log(req.body.accId);

    // const errors = validationResult(req);
    // const url1 = url.parse(req.url, true);
    req.body.accId = req.query.accId;

    // req.body.updatedadminId = req.adminId;
    // console.log(req.body.accId);

    const response = await sellfileService(req);
    res.send(response);
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
