import { validationResult } from "express-validator";
import { addCategoryExpenseService } from "../../../service/expense/addCategoryExpenseService.js";


export async function addCategoryExpenseController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      // console.log(req.body);

      req.body.updatedadminId = req.body.adminId;
      // console.log(req.body);

     const response =  await addCategoryExpenseService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

