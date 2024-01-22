const express = require("express");
const ProductModel = require("./models/product-model");
const router = express.Router();

// Read All
router.get("/prod", async function (req, res) {
  let result = await ProductModel.find();

  try {
    console.log(
      "[Read All] - No. of  items get from database : " + result.length
    );
    res.send(result);
  } catch (error) {
    // sending error details to client
    res.status(500).send(error);
  }
});

// Read Single
router.get("/prod/:id", async function (req, res) {
  var dno = req.params.id;
  let result = await ProductModel.findById(dno);
  console.log("[Read Single] - " + JSON.stringify(result));
  res.send(result);
});

// Create
router.post("/prod", async function (req, res) {
  var prodObj = new ProductModel(req.body);

  // Logic to insert new dept in database
  let newObj = await prodObj.save();

  var result = {};
  result.status = "Record inserted in Database";
  console.log("[Create] - Record inserted in Database");
  res.send(result);
});

// Update
router.put("/prod/:id", async function (req, res) {
  // Logic to insert new dept in database
  let resResult = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );

  var result = {};
  result.status = "Record updated in Database";
  console.log("[Update] - Record updated in Database");
  res.send(result);
});

// Delete
router.delete("/prod/:id", async function (req, res) {
  var dno = req.params.id;
  let resResult = await ProductModel.findByIdAndDelete(dno);

  var result = {};
  result.status = "Record deleted from Database";
  console.log("[Delete] - Record deleted from Database");
  res.send(result);
});

module.exports = router;
