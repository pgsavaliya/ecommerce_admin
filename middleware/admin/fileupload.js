import multer from "multer";
import path from "path";
// console.log("__dirNmae", __dirname);
// console.log("Pavan");

let storageMulter = multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log("Pavan");
    callback(null, "./files");
    // console.log("Pavan");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage: storageMulter });
