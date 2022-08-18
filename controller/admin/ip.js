export async function ipController(req, res) {
  try {
    console.log("jkfhkj");
    console.log(req.connection.localAddress);

    let ip = req.connection.localAddress;
    console.log(ip);
    res.send(ip);
  } catch (error) {
    res.status(404).send(error || "something worng");
  }
}
