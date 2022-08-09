import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { accExpenseDowlandPdfModel } from "../../../scema/admin/accexpense/accexpenseDowlandPdf-scema.js";
import mongoose from "mongoose";

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
    console.log(input.accId);
    reasult = await accExpenseDowlandPdfModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
          accId: mongoose.Types.ObjectId(input.accId),
        },
      },
    ]);
    console.log("Reasult is", reasult);
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
      console.log(path.join(dirname, "./pdf/ItCodeHelpaccexpense.pdf"));
      await pdfDoc.pipe(
        fs.createWriteStream(
          path.join(dirname, "./pdf/ItCodeHelpaccexpense.pdf")
        )
      );
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
        resole("1");
      };
      setTimeout(waitetosolve, 2000);
    } else {
      resole("data not found");
    }
  });
}
