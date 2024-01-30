import React from "react";

function EmpObj() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      salary: 80000,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product Management",
      salary: 90000,
    },
    {
      id: 3,
      name: "Bob Johnson",
      position: "Data Scientist",
      department: "Data Science",
      salary: 85000,
    },
    {
      id: 4,
      name: "Alice Williams",
      position: "UX Designer",
      department: "Design",
      salary: 75000,
    },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(employees[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              {Object.values(employee).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmpObj;
