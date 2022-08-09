import Pdfdoc from "pdfkit-table";
import path from "path";
import fs from "fs";
import os from "os";
import { ExpenseDowlandPdfModel } from "../../scema/admin/expense/expenseDowlandPdf-scema.js";

export async function expenseDowlandPdfService(input, res) {
  return new Promise(async (resole, reject) => {
    let reasult = [];
    let lte = new Date(input.enddate);

    let gte = new Date(input.startdate);
    // console.log(gte)
    gte = new Date(gte);
    lte = new Date(lte);
    lte.setDate(lte.getDate() + 1);
    console.log(lte);
    reasult = await ExpenseDowlandPdfModel.aggregate([
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
      await pdfDoc.pipe(
        fs.createWriteStream(path.join(dirname, "/pdf/ItCodeHelpexpense.pdf"))
      );
      const table = {
        title: "E-Comm  ItCodeHelp Expense",
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
