import mongoose from "mongoose";
const viewAccount = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "E-Comm",
    timestamps: true,
  }
);
export const viewAccountModel = mongoose.model("viewAccount", viewAccount);
