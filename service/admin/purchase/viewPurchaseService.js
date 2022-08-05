import mongoose from "mongoose";
import Mongoose from "mongoose";
import { viewPurchaseModel } from "../../../scema/admin/purchase/viewPurchase-scema.js";

export async function viewPurchaseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        if (input.accId) {
          // console.log(" dsfgiud", input.body.accId);
          var reasult = await viewPurchaseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
                name: {
                  $regex: input.search,
                  $options: "i",
                },
              },
            },
          ]);
        } else {
          var reasult = await viewPurchaseModel.aggregate([
            {
              $match: {
                name: {
                  $regex: input.search,
                  $options: "i",
                },
              },
            },
          ]);
        }
      } else {
        console.log(input.accId);
        if (input.accId) {
          let date1 = new Date();
          date1.setMonth(date1.getMonth() - input.timming);
          console.log(input.accId);
          var reasult = await viewPurchaseModel.aggregate([
            {
              $match: {
                accId: mongoose.Types.ObjectId(input.accId),
                createdAt: {
                  $gte: date1,
                },
                name: {
                  $regex: input.search,
                  $options: "i",
                },
              },
            },
          ]);
          // console.log("dfgbsd");
        } else {
          let date1 = new Date();
          date1.setMonth(date1.getMonth() - input.timming);
          var reasult = await viewPurchaseModel.aggregate([
            {
              $match: {
                createdAt: {
                  $gte: date1,
                },
                name: {
                  $regex: input.search,
                  $options: "i",
                },
              },
            },
          ]);
        }
      }
      if (reasult != "") {
        console.log(reasult);
        resole(reasult);
      } else {
        reject("Purchase Not Found");
      }
    } catch (e) {
      console.log(e);
      reject("Something is worng" + e);
    }
  });
}
