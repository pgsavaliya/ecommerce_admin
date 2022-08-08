import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { SellDowlandPdfModel } from "../../../scema/admin/sell/sellDowlandPdf-scema.js";

export async function sellDowlandPdfService(input, res) {
  return new Promise(async (resole, reject) => {

    let reasult = [];
    let lte = new Date(input.enddate);

    let gte = new Date(input.startdate);
    // console.log(gte)
    gte = new Date(gte);
    lte = new Date(lte);
    lte.setDate(lte.getDate() + 1);
    console.log(lte)
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
      await pdfDoc.pipe(fs.createWriteStream("./pdf/ItCodeHelpSell.pdf"));
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
      pdfDoc.end()
      
    //   console.log(pdfDoc.end)
      const waitetosolve = () => {
      resole(pdfDoc) 

    }
    setTimeout(waitetosolve, 2000);
    } 
    else{
      resole("data not found")
    }
  });
}
