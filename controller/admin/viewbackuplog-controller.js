import { validationResult } from "express-validator";
import { viewbackuplogService } from "../../service/admin/veiwbackuplogService.js";

export async function viewbackuplogController(req, res) {
  try {
    // console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      // console.log(req.adminId);
      const response = await viewbackuplogService(req.adminId);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
