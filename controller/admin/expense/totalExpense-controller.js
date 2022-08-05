import { validationResult } from "express-validator";
import { totalExpenseService } from "../../../service/expense/totalExpenseService.js";


export async function totalExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      //  console.log(req.adminId);
     const response =  await totalExpenseService(req.adminId);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

