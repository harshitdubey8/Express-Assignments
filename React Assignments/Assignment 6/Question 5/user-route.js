const express = require("express");
const userModel = require("./models/user-data-model");
const router = express.Router();

// User Already Exist || login
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

router.post("/register", async function (req, res) {
  try {
    //  instance of the User model
    const user = new userModel({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: req.body.securityAnswer,
    });

    // Check If use Already Exist
    const existingUser = await userModel.findOne({ email: user.email });
    if (existingUser === null) {
      // Save the user to the database
      await user.save();
      console.log("user created");
      res.status(201).json({ message: "User created successfully" });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Forgot Password
router.put("/changePassword", async function (req, res) {
  try {
    const user = new userModel({
      email: req.body.email,
      password: req.body.password,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: req.body.securityAnswer,
    });

    const existingUser = await userModel.findOne({ email: user.email });

    if (existingUser !== null) {
      // based on the existingUser Security Question check if the given answer is same as that of in data base if yes update the new password with the old one
      if (
        existingUser.securityQuestion === user.securityQuestion &&
        existingUser.securityAnswer === user.securityAnswer
      ) {
        // Update the user's password in the database
        existingUser.password = user.password;
        await existingUser.save();

        // await user.save();
        console.log("password Updated");
        res.status(201).json({ message: "Password Changed Successfully" });
      } else {
        return res.status(400).json({ message: "User does Not exists" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
