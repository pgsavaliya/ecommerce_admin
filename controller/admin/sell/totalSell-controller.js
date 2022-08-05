import { validationResult } from "express-validator";
import { totalSellService } from "../../../service/admin/sell/totalSellService.js";

export async function totalSellController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      // console.log(req.accId);
      const response = await totalSellService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
