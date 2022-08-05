import mongoose from "mongoose";
import Mongoose from "mongoose";
import { viewaccExpenseModel } from "../../../scema/admin/accexpense/viewaccExpense-scema.js";

export async function viewaccExpenseService(input) {
  return new Promise(async (resole, reject) => {
    try {
      if (input.timming == 0) {
        var reasult = await viewaccExpenseModel.aggregate([
          {
            $match: {
              accId: mongoose.Types.ObjectId(input.accId),
              description: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $project: {
              adminId: 0,
              updatedadminId: 0,
              __v: 0,
            },
          },
        ]);
      } else {
        let date1 = new Date();
        date1.setMonth(date1.getMonth() - input.timming);
        var reasult = await viewaccExpenseModel.aggregate([
          {
            $match: {
              accId: mongoose.Types.ObjectId(input.accId),
              createdAt: {
                $gte: date1,
              },
              description: {
                $regex: input.search,
                $options: "i",
              },
            },
          },
          {
            $project: {
              adminId: 0,
              updatedadminId: 0,
              __v: 0,
            },
          },
        ]);
      }

      if (reasult != "") {
        resole(reasult);
      } else {
        reject("Data Not Found");
      }
    } catch (e) {
      reject("Something is worng" + e);
    }
  });
}
