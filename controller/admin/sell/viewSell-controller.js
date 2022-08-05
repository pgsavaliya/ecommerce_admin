import { validationResult } from "express-validator";
import { viewSellService } from "../../../service/admin/sell/viewSellService.js";

export async function viewSellController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      //  console.log(req.adminId);
      const response = await viewSellService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
