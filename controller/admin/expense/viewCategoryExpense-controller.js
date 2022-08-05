import { validationResult } from "express-validator";
import { viewCategoryExpenseService } from "../../../service/expense/veiwCategoryExpenseService.js";

export async function viewCategoryExpenseController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      //  console.log(req.adminId);
      const response = await viewCategoryExpenseService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
