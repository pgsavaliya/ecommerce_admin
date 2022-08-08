import Mongoose from "mongoose";
import { viewSellModel } from "../../../scema/admin/sell/viewSell-scema.js";
import Pdfdoc from "pdfkit-table";
import fs from "fs";
import downloadsFolder from "downloads-folder";
import mongoose from "mongoose";

export async function viewSellService(input, res) {
  return new Promise(async (resole, reject) => {
    try {
      // console.log(downloadsFolder());

      let reasult = [];
      if (input.timming == 0) {
        reasult = await viewSellModel.aggregate([
          {
            $match: {
              accId: mongoose.Types.ObjectId(input.accId),
              Full_Name: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
        ]);
      } else {
        let date1 = new Date();
        date1.setMonth(date1.getMonth() - input.timming);
        reasult = await viewSellModel.aggregate([
          {
            $match: {
              accId: mongoose.Types.ObjectId(input.accId),
              createdAt: {
                $gte: date1,
              },
              Full_Name: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
        ]);
      }

      if (reasult != "") {
        resole(reasult);
      } else {
        reject("Sell Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
