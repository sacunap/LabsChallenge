const express = require("express");
const server = express();
var cors = require("cors");

const routes = require("./routes/index.js");
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use("/", routes);

server.listen(1337, console.log("Server listening at port 1337"));

module.exports = server;
