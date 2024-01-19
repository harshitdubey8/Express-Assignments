const express = require("express");
const router = express.Router();

//routes
router.get("/products", (req, res) => {
  res.render("products", { errorMessage: "", totalAmt: "" });
});

router.post("/products", (req, res) => {
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

// Route to get all products
router.get("/allproducts", (req, res) => {
  const dummyData = {};

  dummyData.productsArray = [
    {
      pid: 1,
      pname: "Product A",
      price: 20.99,
      quantity: 50,
      category: "Electronics",
    },
    {
      pid: 2,
      pname: "Product B",
      price: 14.99,
      quantity: 30,
      category: "Clothing",
    },
    {
      pid: 3,
      pname: "Product C",
      price: 39.95,
      quantity: 15,
      category: "Electronics",
    },
    {
      pid: 4,
      pname: "Product D",
      price: 9.99,
      quantity: 100,
      category: "Clothing",
    },
  ];

  res.render("allproducts", dummyData);
});

// Get products details based on ID (using query )
router.get("/getproductDetails", (req, res) => {
  var productsArray = [
    {
      pid: 1,
      pname: "Product A",
      price: 20.99,
      quantity: 50,
      category: "Electronics",
    },
    {
      pid: 2,
      pname: "Product B",
      price: 14.99,
      quantity: 30,
      category: "Clothing",
    },
    {
      pid: 3,
      pname: "Product C",
      price: 39.95,
      quantity: 15,
      category: "Electronics",
    },
    {
      pid: 4,
      pname: "Product D",
      price: 9.99,
      quantity: 100,
      category: "Clothing",
    },
  ];

  let dno = req.query.dno;
  let dataObj = {};
  dataObj.prodObj = productsArray.find((item) => item.pid == dno);

  res.render("proddetails", dataObj);
});

router.get("/getProductByCategory", (req, res) => {
  var productsArray = [
    {
      pid: 1,
      pname: "Product A",
      price: 20.99,
      quantity: 50,
      category: "Electronics",
    },
    {
      pid: 2,
      pname: "Product B",
      price: 14.99,
      quantity: 30,
      category: "Clothing",
    },
    {
      pid: 3,
      pname: "Product C",
      price: 39.95,
      quantity: 15,
      category: "Electronics",
    },
    {
      pid: 4,
      pname: "Product D",
      price: 9.99,
      quantity: 100,
      category: "Clothing",
    },
  ];

  let category = req.query.category;
  let dataObj = {};
  dataObj.prodArray = productsArray.filter(
    (item) => item.category === category
  );

  res.render("prodbycategory", dataObj);
});

module.exports = router;
