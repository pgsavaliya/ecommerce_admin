import { validationResult } from "express-validator";
import { totalaccPurchaseService } from "../../../service/admin/purchase/totalaccPurchaseService.js";

export async function totalPurchaseController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      if (req.accId) {
        // console.log(req.accId);

        const response = await totalaccPurchaseService(req);
        res.send(response);
      } else {
        const response = await totalaccPurchaseService();
        res.send(response);
      }
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
