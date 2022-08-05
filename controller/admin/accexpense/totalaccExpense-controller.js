import { validationResult } from "express-validator";
import { totalaccExpenseService } from "../../../service/admin/accexpense/totalaccExpenseService.js";


export async function totalaccExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      //  console.log(req.adminId);
     const response =  await totalaccExpenseService(req);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

