import mongoose from "mongoose";
const AddEcomm = new mongoose.Schema(
  {
    accname:{
      type:String,
      require:true
    },
    person_name:{
      type:String,
      require:true
    },
    shop_link:{
      type:String,
    },
    internet:{
      type:String
    },
    mobile_no:{
      type:Number
    },
    paypal_id:{
      type:String
    }
  },
  { collection: "E-Comm",
  timestamps:true
}
);
export const addEcommModel = mongoose.model("AddEcomm", AddEcomm);
