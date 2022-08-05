import { validationResult } from "express-validator";
import url from "url";
import { updateaccExpenseService } from "../../../service/admin/accexpense/updateaccExpenseService.js";


export async function updateaccExpenseController(req, res){
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      const url1 = url.parse(req.url,true);
    let accexpenseId = url1.query.accexpenseId;
      //  console.log(req.expenseId);
     const response =  await updateaccExpenseService(req.body,accexpenseId);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

