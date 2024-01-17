// import express
var express = require("express");
var app = express();

// defining a route
app.get("/", (req, res) => {
  let prodID = "10256";
  let productName = "LG Printer";
  let unitPrice = 2500;
  let quantity = 3;
  let totalAMT = 7500;

  let str = "<h2 align ='center' >Product Details</h2> <hr/> <hr/>";
  str += `
       <table  style="border-collapse: collapse; width: 50%; margin: 20px;">
    <tr>
      <th  style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;" >Attribute</th>
      <th  style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Value</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;" >Product Id</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${prodID}</td>
    </tr>
    <tr >
      <td  style="border: 1px solid #ddd; padding: 8px;">Product Name</td>
      <td style="border: 1px solid #ddd; padding: 8px;" >${productName}</td>
    </tr>
    <tr>
      <td  style="border: 1px solid #ddd; padding: 8px;">Unit Price</td>
      <td  style="border: 1px solid #ddd; padding: 8px;">${unitPrice}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Quantity</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${quantity}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;" >Total Amount</td>
      <td  style="border: 1px solid #ddd; padding: 8px;">${totalAMT}</td>
    </tr>
  </table>
  `;

  res.send(str);
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
