import { validationResult } from "express-validator";
import { updateExpenseService } from "../../../service/expense/updateExpenseService.js";
import url from "url";


export async function updateExpenseController(req, res){
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      const url1 = url.parse(req.url,true);
    let expenseId = url1.query.expenseId;
      //  console.log(req.expenseId);
     const response =  await updateExpenseService(req.body,expenseId);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

