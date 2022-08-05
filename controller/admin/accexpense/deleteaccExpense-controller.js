import { validationResult } from "express-validator";
import { deleteaccExpenseService } from "../../../service/admin/accexpense/deleteaccExpenseService.js";


export async function deleteaccExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
     const response =  await deleteaccExpenseService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

