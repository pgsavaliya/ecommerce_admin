import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { accExpenseDowlandPdfModel } from "../../../scema/admin/accexpense/accexpenseDowlandPdf-scema.js";

export async function accexpenseDowlandPdfService(input, res) {
  return new Promise(async (resole, reject) => {
    let reasult = [];
    let lte = new Date(input.enddate);

    let gte = new Date(input.startdate);
    // console.log(gte)
    gte = new Date(gte);
    lte = new Date(lte);
    lte.setDate(lte.getDate() + 1);
    console.log(lte);
    reasult = await accExpenseDowlandPdfModel.aggregate([
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
      await pdfDoc.pipe(fs.createWriteStream("./pdf/ItCodeHelpaccexpense.pdf"));
      const table = {
        title: "E-Comm  ItCodeHelp accExpense",
        headers: [
          { label: "Amount", property: "amount" },
          { label: "Description", property: "description" },
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
