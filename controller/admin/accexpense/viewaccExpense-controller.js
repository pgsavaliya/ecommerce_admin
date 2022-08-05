import { validationResult } from "express-validator";
import { viewaccExpenseService } from "../../../service/admin/accexpense/veiwaccExpenseService.js";



export async function viewaccExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      //  console.log(req.adminId);
     const response =  await viewaccExpenseService(req);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

