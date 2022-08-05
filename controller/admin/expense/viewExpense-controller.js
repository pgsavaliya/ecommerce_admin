import { validationResult } from "express-validator";
import { viewExpenseService } from "../../../service/expense/veiwExpenseService.js";

export async function viewExpenseController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      // console.log(req);
      const response = await viewExpenseService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
