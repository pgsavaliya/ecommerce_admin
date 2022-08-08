import jwt from "jsonwebtoken";
import url from "url";
export function check_admin_token(req, res, next) {
  let token = req.headers["authorization"];

  // console.log(expenseId);
  if (!token) {
    res.status(403).json({ success: false, message: "token missing" });
  } else {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.ADMIN_KEY, (err, payload) => {
      if (err) {
        res
          .status(403)
          .json({ success: false, message: "unauthorized token" + err });
      } else {
        req.adminId = payload.adminId;
        req.body.adminId = payload.adminId;
        // console.log(payload);
        req.password = payload.password;
        req.logId = payload.logId;
        req.body.logId = payload.logId;
        next();
      }
    });
  }
}

export function check_admin_token_url(req, res, next) {
  const urltoken = url.parse(req.url, true);
  let token = urltoken.query.token;
  let expenseId = urltoken.query.expenseId;
  let filepath = urltoken.query.filepath;
  let accexpenseId = urltoken.query.accexpenseId;
  let accId = urltoken.query.accId;
  let timming = urltoken.query.timming;
  let search = urltoken.query.search;
  //   console.log(search);
  if (!token) {
    res.status(403).json({ success: false, message: "token missing" });
  } else {
    //  token = token.split(" ")[1];
    jwt.verify(token, process.env.ADMIN_KEY, (err, payload) => {
      if (err) {
        res
          .status(403)
          .json({ success: false, message: "unauthorized token" + err });
      } else {
        req.adminId = payload.adminId;
        req.body.adminId = payload.adminId;
        req.logId = payload.logId;
        req.body.logId = payload.logId;
        req.body.expenseId = expenseId;
        req.body.filepath = filepath;
        req.accId = accId;
        req.body.accId = accId;
        req.body.accexpenseId = accexpenseId;
        req.timming = timming;
        req.search = search;

        // console.log(req.timming);
        next();
      }
    });
  }
}
