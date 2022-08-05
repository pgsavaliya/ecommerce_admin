import mongoose from "mongoose";
const adminLogin = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Email Id!`,
      },
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { collection: "admin" }
);
export const adminLoginmodel = mongoose.model("adminLogin", adminLogin);
