import Mongoose from "mongoose";
import { viewSellModel } from "../../../scema/admin/sell/viewSell-scema.js";
import Pdfdoc from "pdfkit-table";
import fs from "fs";
import downloadsFolder from "downloads-folder";
import mongoose from "mongoose";

export async function viewSellService(input, res) {
  // return new Promise(async (resole, reject) => {
  //   try {
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
    reasult = reasult.map((item) => {
      return {
        ...item,
        Sale_Date: item.createdAt
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };
    });
    let pdfDoc = new Pdfdoc({
      // layout: "landscape",
      // margin: 50,
      // size: "a4",
    });
    pdfDoc.pipe(fs.createWriteStream("./pdf/Pavan.pdf"));
    const table = {
      title: "E-Comm  ItCodeHelp",
      subtitle: "Subtitle",
      headers: [
        { label: "Order_Net", property: "Order_Net" },
        { label: "Full_Name", property: "Full_Name" },
        { label: "Buyer", property: "Buyer" },
        { label: "Sale_Date", property: "Sale_Date" },
      ],
      datas: reasult,
    };
    await pdfDoc.table(table, {
      // width: 700,
      border: 1,
    });
    pdfDoc.end();
    // ./router/v1.js
    // console.log()
    res.dowland("./Pavan.pdf", function (error) {
      console.log("Error : ", error);
    });
    //   } else {
    //     reject("Sell Not Found");
    //   }
    // } catch (e) {
    //   reject("Something is worng" + e);
  }
  // });
}
