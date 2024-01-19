// import express
var express = require("express");
var bodyParser = require("body-parser");
const productsRouter = require("./products-routes");

var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/prod", productsRouter);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
