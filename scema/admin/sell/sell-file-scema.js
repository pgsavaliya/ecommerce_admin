import mongoose from "mongoose";
const sellfile = new mongoose.Schema(
  {
    Sale_Date: {
      type: Date,
    },
    Order_ID: {
      type: Number,
      unique: true,
    },
    Buyer_User_ID: {
      type: String,
    },
    Full_Name: {
      type: String,
    },
    First_Name: {
      type: String,
    },
    Last_Name: {
      type: String,
    },
    Number_of_Items: {
      type: Number,
    },
    Payment_Method: {
      type: String,
    },
    Date_Posted: {
      type: Date,
    },
    Street_1: {
      type: String,
    },
    Street_2: {
      type: String,
    },
    Delivery_City: {
      type: String,
    },
    Delivery_State: {
      type: String,
    },
    Delivery_Zipcode: {
      type: String,
    },
    Delivery_Country: {
      type: String,
    },
    Currency: {
      type: String,
    },
    Order_Value: {
      type: Number,
    },
    Coupon_Code: {
      type: String,
    },
    Coupon_Details: {
      type: String,
    },
    Discount_Amount: {
      type: Number,
    },
    Delivery_Discount: {
      type: Number,
    },
    Delivery: {
      type: Number,
    },
    Sales_tax: {
      type: Number,
    },
    Order_total: {
      type: Number,
    },
    Status: {
      type: String,
    },
    Card_Processing_Fees: {
      type: Number,
    },
    Order_Net: {
      type: Number,
    },
    Adjusted_Order_Total: {
      type: Number,
    },
    Adjusted_Card_ProcessingFees: {
      type: Number,
    },
    Adjusted_Net_Order_Amount: {
      type: Number,
    },
    Buyer: {
      type: String,
    },
    Order_Type: {
      type: String,
    },
    Payment_Type: {
      type: String,
    },
    InPerson_Discount: {
      type: Number,
    },
    InPerson_Location: {
      type: String,
    },
    SKU: {
      type: String,
    },
    accId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    updatedadminId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    collection: "Sell",
    timestamps: true,
  }
);
export const sellfileModel = mongoose.model("sellfile", sellfile);
