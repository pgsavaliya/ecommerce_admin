//database connection
import {URL} from "url";
import path from "path";
import express from "express";
import v1 from "./router/v1.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();


global.dirname = new URL('.', import.meta.url).pathname;
// global.__dirname = path(fileURLToPath(import.meta.url));
// global.appRoot = path.resolve(__dirname);
// console.log(__dirname);
mongoose
  .connect(
    "mongodb+srv://pavan:pavan@cluster0.saxdu.mongodb.net/e-comm?retryWrites=true&w=majority"
  )
  .then((reasult) => {
    // console.log("connect")
    app.listen(process.env.PORT || 5000, () => {
      console.log("server Start .. 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//importing all package

app.use(cors());
app.get("/", (req, res, next) => {
  // console.log("root thing calling")
  // res.download(__dirname + "/pdf/Pavan.pdf");
  res.status(200).json({ message: "home route" });
});

app.use("/v1", v1);
