import { validationResult } from "express-validator";
import { deleteExpenseService } from "../../../service/expense/deleteExpenseService.js";


export async function deleteExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
     const response =  await deleteExpenseService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

