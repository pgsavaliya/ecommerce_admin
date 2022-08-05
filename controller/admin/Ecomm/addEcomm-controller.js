import { validationResult } from "express-validator";
import { addEcommAccService } from "../../../service/admin/Ecomm/addEcomm-services.js";

export async function addEcommAccController(req, res){
    try {
      // console.log(req);
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else{
    //   console.log(req.body);
     const response =  await addEcommAccService(req.body);
      res.send(response);
    }
    } catch (error) {
      res.status(404).send(error || "something worng");
    }
  }

