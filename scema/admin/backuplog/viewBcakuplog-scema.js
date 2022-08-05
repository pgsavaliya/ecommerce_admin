import mongoose from "mongoose";
const viewbackuplog = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "backupLog",
    timestamps: true,
  }
);
export const viewbackuplogModel = mongoose.model(
  "viewbackuplog",
  viewbackuplog
);
