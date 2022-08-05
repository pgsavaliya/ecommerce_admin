import { validationResult } from "express-validator";
import { totalhomeProfitService } from "../../service/admin/totalhomeProfitService.js";

export async function totalhomeProfitController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      const response = await totalhomeProfitService(req);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
