const express = require("express");
const userModel = require("./models/user-data-model");
const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ username: username });
    if (existingUser && existingUser.password === password) {
      console.log("This user exists");
      return res.status(200).json({ message: "User already exists" });
    } else {
      return res.status(400).json({ message: "User does not exists" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
