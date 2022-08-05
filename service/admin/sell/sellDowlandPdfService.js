import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { SellDowlandPdfModel } from "../../../scema/admin/sell/sellDowlandPdf-scema.js";

export async function sellDowlandPdfService(input, res) {
  return new Promise(async (resole, reject) => {
    // resole("fhdxddvcx");

    // return "/pdf/Pavan.pdf";
    let reasult = [];
    let lte = new Date(input.lte);

    let gte = new Date(input.gte);

    reasult = await SellDowlandPdfModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        },
      },
    ]);
    // console.log("Reasult is", reasult);
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

      let pdfDoc = new Pdfdoc();
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
        border: 1,
      });
      pdfDoc.end();

      console.log(pdfDoc);
      resole("dvhsk");
      // let abc = __dirname + "/pdf/Pavan.pdf";
      console.log("abc");
      // console.log();
      // let ppath1 = path.resolve("/pdf/Pavan.pdf");
      // console.log(ppath1);
      // res.send("fhd");
    } else {
    }
  });
}
