import React from "react";
import "./StudentDetails.css";

function StudentDetails() {
  const studentData = {
    id: "001",
    name: "Harshit Dubey",
    course: "Btech CSE",
    age: "24",
    total: "500",
  };

  return (
    <div className="StudentSection">
      <h2>Student Details</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>Age</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{studentData.id}</td>
          <td>{studentData.name}</td>
          <td>{studentData.course}</td>
          <td>{studentData.age}</td>
          <td>{studentData.total}</td>
        </tr>
      </table>
    </div>
  );
}

export default StudentDetails;
