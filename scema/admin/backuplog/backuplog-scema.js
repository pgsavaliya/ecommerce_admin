import mongoose from "mongoose";
const backupLog = new mongoose.Schema(
  {
    adminId:{
        type:mongoose.Schema.Types.ObjectId
      },
    log:[{
      type:Object
    }]
  },
  { collection: "backupLog",
      timestamps:true  
  }
);
export const backupLogModel = mongoose.model("backupLog", backupLog);
