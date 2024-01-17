// import express
var express = require("express");
var app = express();

// defining a route
app.get("/", (req, res) => {
  let empId = "10256";
  let empName = "Harshit Dubey";
  let empJob = "Full Stack Developer";
  let deptNo = "10";
  let emailId = "harshit.dubey@mphasis.com";

  let str =
    "<h2 align ='center' >Employees Details using String literals</h2> <hr/> <hr/>";
  str += `
        <div>
            <strong> Employee Id :      </strong>   ${empId} <br/>
			<strong> Employee Name:     </strong>  ${empName} <br/>
			<strong> Employee Job :     </strong> ${empJob} <br/>
			<strong> Employee Deptno :  </strong>  ${deptNo} <br/>
			<strong> Employee EmailId : </strong> ${emailId}<br/>
        </div>
  `;

  res.send(str);
});

// Start the server
app.listen(3000, () => {});

console.log(`Server is running at http://localhost:3000`);
