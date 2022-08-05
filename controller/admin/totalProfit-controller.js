import { validationResult } from "express-validator";
import { totalProfitService } from "../../service/admin/totalProfitService.js";

export async function totalProfitController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      // console.log(req.accId);
      const response = await totalProfitService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
