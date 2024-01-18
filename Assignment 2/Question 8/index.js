// import express
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// defining a route
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/products", (req, res) => {
  res.render("products", { errorMessage: "", totalAmt: "" });
});

app.post("/products", (req, res) => {
  let productName = req.body.t1;
  let productsQuantity = req.body.t2;
  let productAmount = req.body.t3;

  if (productsQuantity != 0 && productAmount != 0) {
    var totalAmt = productAmount * productsQuantity;
    res.render("products", { errorMessage: "", totalAmt });
  } else {
    res.render("products", {
      errorMessage: "can't leave the fields empty",
      totalAmt: null,
    });
  }
});
// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
