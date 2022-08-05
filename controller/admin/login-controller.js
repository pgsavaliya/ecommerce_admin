import { adminloginService } from "../../service/admin/login-service.js";

export async function adminloginController(req, res) {
  try {
    const response = await adminloginService(req.body);
    if (response) {
      res.send(response);

    } else {
      res.send({status: 404 , message:"this admin is not valid"});

    }
  } catch (error) {
    res.status(500).send(error || "something worng");
  }
}
