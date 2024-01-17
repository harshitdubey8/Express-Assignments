// import express
var express = require("express");
var app = express();

// middleware

app.use(express.static("public"));

// defining a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
