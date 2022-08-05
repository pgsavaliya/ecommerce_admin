import { validationResult } from "express-validator";
import { viewAccountService } from "../../../service/admin/Ecomm/veiwAccountService.js";


export async function viewAccountController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
      //  console.log(req.adminId);
     const response =  await viewAccountService(req.adminId);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

