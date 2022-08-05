import { validationResult } from "express-validator";
import { updateCategoryExpenseService } from "../../../service/expense/updateCategoryExpenseService.js";
import url from "url";



export async function updateCategoryExpenseController(req, res){
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      const url1 = url.parse(req.url,true);
    let categoryId = url1.query.categoryId;
      //  console.log(req.expenseId);
     const response =  await updateCategoryExpenseService(req.body,categoryId);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

