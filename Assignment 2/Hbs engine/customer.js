// import express
var express = require("express");
var app = express();

// middleware
app.use(express.static("public"));

app.set("view engine", "hbs");

// defining a route
app.get("/", (req, res) => {
  let dataObj = {};

  dataObj.userArray = [
    { Name: "Alfreds Futterkiste", City: "Berlin", Country: "Germany" },
    {
      Name: "Ana Trujillo Emparedados y helados",
      City: "México D.F.",
      Country: "Mexico",
    },
    { Name: "Antonio Moreno Taquería", City: "México D.F.", Country: "Mexico" },
    { Name: "Around the Horn", City: "London", Country: "UK" },
    { Name: "B's Beverages", City: "London", Country: "UK" },
    { Name: "Berglunds snabbköp", City: "Luleå", Country: "Sweden" },
    { Name: "Blauer See Delikatessen", City: "Mannheim", Country: "Germany" },
  ];

  res.render("customer", dataObj);
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
