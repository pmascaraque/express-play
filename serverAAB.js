//const express = require("express");
//const server = express();

const server = require("express")();
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({ extended: true })); 

server.get("/", (req, res) => {
  res.send("Hello");
});

server.post("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Pablos age is 18</h1>");
});

server.listen(8080, () => console.log("Listening on http://localhost:8080"));
