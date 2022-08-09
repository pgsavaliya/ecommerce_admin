import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { purchaseDowlandPdfModel } from "../../../scema/admin/purchase/purchaseDowlandPdf-scema.js";

export async function purchaseDowlandPdfService(input, res) {
  return new Promise(async (resole, reject) => {
    let reasult = [];
    let lte = new Date(input.enddate);

    let gte = new Date(input.startdate);
    // console.log(gte)
    gte = new Date(gte);
    lte = new Date(lte);
    lte.setDate(lte.getDate() + 1);
    console.log(lte);
    reasult = await purchaseDowlandPdfModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
          accId: input.accId,
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
      await pdfDoc.pipe(fs.createWriteStream("./pdf/ItCodeHelppurchase.pdf"));
      const table = {
        title: "E-Comm  ItCodeHelp",
        headers: [
          { label: "Name", property: "name" },
          { label: "Amount", property: "amount" },
        ],
        datas: reasult,
      };
      await pdfDoc.table(table, {
        border: 1,
      });
      pdfDoc.end();

      //   console.log(pdfDoc.end)
      const waitetosolve = () => {
        resole(pdfDoc);
      };
      setTimeout(waitetosolve, 2000);
    } else {
      resole("data not found");
    }
  });
}
