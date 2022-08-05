import express from "express";
import adminRoute from "./admin/adminRoute.js";

const v1 = express();

v1.get("/", (req, res) => {
  // res.download(__dirname + "/pdf/Pavan.pdf");
  res.status(200).json({ message: "v1 routes working test" });
});

v1.use("/admin", adminRoute);
export default v1;
