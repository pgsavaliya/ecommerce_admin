import multer from "multer";
import path from "path";
// console.log("Pavan");

let storageMulter = multer.diskStorage({
  destination: function (req, file, callback) {
    // console.log("Pavan");
    console.log(file);
    // console.log("__dirNmae");

    callback(null, path.join(dirname, "/files"));

    // callback(null, "./files");

    console.log("Pavan");
  },

  filename: function (req, file, callback) {
    console.log("sdfgaf");
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage: storageMulter });
