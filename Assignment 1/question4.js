// import express
var express = require("express");
var app = express();

// defining a route
app.get("/", (req, res) => {
  let str = "<h2 align ='center' >Employees Details</h2> <hr/>";

  str += `
        <div>
     <strong> Employee Id : </strong>   10256 <br/>
			<strong>	Employee Name   : </strong>  Harshit Dubey <br/>
			<strong>	Employee Job :  </strong> Manager <br/>
			<strong>	Employee Deptno :</strong>  10 <br/>
			<strong>	Employee EmailId : </strong> tnrao.trainer@gmail.com <br/>
                </div>
  `;

  res.send(str);
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
