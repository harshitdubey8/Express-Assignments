const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studRouter = require("./student-route");
const prodRouter = require("./products-route");
const deptRouter = require("./department-route");
const userRouter = require("./user-route");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", studRouter);
app.use("/api", prodRouter);
app.use("/api", deptRouter);
app.use("/api", userRouter);

app.get("/", function (req, res) {
  res.send("Welcome to Express JS API Application");
});

var server = app.listen(3005, function () {});
console.log("Server Started. URL:http://localhost:3005");
