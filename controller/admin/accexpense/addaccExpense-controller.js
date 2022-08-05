import { validationResult } from "express-validator";
import { addaccExpenseService } from "../../../service/admin/accexpense/addaccExpenseService.js";


export async function addaccExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      req.body.updatedadminId = req.body.adminId;
      // console.log(req.body);
     const response =  await addaccExpenseService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

