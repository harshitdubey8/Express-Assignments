const express = require("express");
const StudentModel = require("./models/student-model");
const router = express.Router();

// Read All
router.get("/stud", async function (req, res) {
  let result = await StudentModel.find({}, { _id: 0 });

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
router.get("/stud/:id", async function (req, res) {
  var dno = req.params.id;
  try {
    let result = await StudentModel.findOne({ Rollno: dno }, { _id: 0 });

    if (result) {
      console.log("[Read Single] - " + JSON.stringify(result));
      res.send(result);
    } else {
      console.log("[Read Single] - Record not found");
      res.status(404).send("Record not found");
    }
  } catch (error) {
    console.error("[Read Single] - Error: " + error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Create
router.post("/stud", async function (req, res) {
  var studObj = new StudentModel({
    Rollno: parseInt(req.body.Rollno),
    Name: req.body.Name,
    Class: req.body.Class,
  });

  // Logic to insert new dept in database
  let newObj = await studObj.save();

  var result = {};
  result.status = "Record inserted in Database";
  console.log("[Create] - Record inserted in Database");
  res.send(result);
});

// Update
router.put("/stud", async function (req, res) {
  var studObj = {};
  studObj.Rollno = parseInt(req.body.Rollno);
  studObj.Name = req.body.Name;
  studObj.Class = req.body.Class;

  // Logic to insert new dept in database
  let resResult = await StudentModel.findOneAndUpdate(
    { Rollno: studObj.Rollno },
    { $set: studObj }
  );

  var result = {};
  result.status = "Record updated in Database";
  console.log("[Update] - Record updated in Database");
  res.send(result);
});

// Delete
router.delete("/stud/:id", async function (req, res) {
  var dno = req.params.id;
  try {
    let resResult = await StudentModel.findOneAndDelete({ Rollno: dno });

    if (resResult) {
      var result = {};
      result.status = "Record deleted from Database";
      console.log("[Delete] - Record deleted from Database");
      res.send(result);
    } else {
      console.log("[Delete] - Record not found in Database");
      res.status(404).send("Record not found in Database");
    }
  } catch (error) {
    console.error("[Delete] - Error: " + error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
