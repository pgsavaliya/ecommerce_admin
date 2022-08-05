import { validationResult } from "express-validator";
import { viewPurchaseService } from "../../../service/admin/purchase/viewPurchaseService.js";

export async function viewPurchaseController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      //  console.log(req.adminId);
      const response = await viewPurchaseService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
