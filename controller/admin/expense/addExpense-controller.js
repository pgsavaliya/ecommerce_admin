import { validationResult } from "express-validator";
import { addExpenseService } from "../../../service/expense/addExpenseService.js";


export async function addExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      req.body.updatedadminId = req.body.adminId;
      // console.log(req.body);
     const response =  await addExpenseService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

