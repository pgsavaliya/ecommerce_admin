import mongoose from "mongoose";
const accLogin = new mongoose.Schema(
  {
    accname: {
      type: String,
    },
    person_name: {
      type: String,
    },
  },
  { collection: "E-Comm" }
);
export const accLoginmodel = mongoose.model("accLogin", accLogin);
