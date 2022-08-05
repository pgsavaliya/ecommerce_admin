"use strict";
import excelToJson from "convert-excel-to-json";
import path, { resolve } from "path";
import csv from "csv-parser";
import fs from "fs";
import { response } from "express";

var json = [];
// filetransfer("/home/mihirsensei/Downloads/pavan.xls");

export async function filetransfer(file) {
  // console.log(path.extname(file))
  let extname = path.extname(file);
  if (extname == ".csv") {
    json = await csvtojson(file);
  } else if (extname == ".xls") {
    // json = csv.fromPath(file, { headers: true });
    json = excelToJson({
      sourceFile: file,
    });
    var header = json.Sheet1.splice(0, 1);
    json.Sheet1.forEach((items) => {
      items[header[0].A] = items.A;
      items[header[0].B] = items.B;
      items[header[0].C] = items.C;
      items[header[0].D] = items.D;
      items[header[0].E] = items.E;
      items[header[0].F] = items.F;
      items[header[0].G] = items.G;
      items[header[0].H] = items.H;
      delete items.A;
      delete items.B;
      delete items.C;
      delete items.D;
      delete items.E;
      delete items.F;
      delete items.G;
      delete items.H;
    });
  } else {
    json = "this file not applicable";
  }
  return json
  // console.log(json)

  //   var price = json.Sheet1.map((item) => item[header[0].H]);
  //   var newSheet1 = count(price, "$");
  // console.log(json)
}
export async function removespace(jsondata){

  return jsondata.forEach((obj) => {
    Object.entries(obj).forEach((entry)=>{
      const [key, value] = entry;
    var replacedKey = key.trim().replace(/ /g, "_");
  
    if (key !== replacedKey) {
       obj[replacedKey] = obj[key];
       delete obj[key];
    }
    console.log(jsondata)

    // var replacedKey = key.trim().replace(/ /g, " ");

    // obj[value] = obj[value];
  });
    
  });
  
}

async function csvtojson(file) {
  let arr = [];
  return new Promise(async (resolve, reject) => {
    fs.createReadStream(file)
      .pipe(csv({}))
      .on("data", (data) => arr.push(data))
      .on("end", () => {
        resolve(arr);
      });
  });
}

function count(str, symbol) {
  let count = 0;
  str.forEach((item) => (count = count + parseInt(item.replace(symbol, ""))));
  return count;
}
// var Sheet2 = json.Sheet1.map(item=>item)
// Sheet2.Pavan = Sheet2.A;
// delete Sheet2.A;
// console.log(Sheet2)

// header[0].Pavan = header[0].A;
// delete header[0].A
// console.log(header[0]);
// console.log(header);

// console.log (newSheet1)
// console.log(newSheet1)
// console.log (json)
