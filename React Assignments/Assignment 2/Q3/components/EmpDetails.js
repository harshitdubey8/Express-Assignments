import React, { useState } from "react";
import "./EmpDetails.css";

function EmpDetails() {
  const empDataArray = [
    { empno: 1, ename: "John Doe", job: "Manager", sal: 5000, deptno: 10 },
    { empno: 2, ename: "Jane Smith", job: "Developer", sal: 4000, deptno: 20 },
    { empno: 3, ename: "Bob Johnson", job: "Analyst", sal: 3500, deptno: 10 },
    { empno: 4, ename: "Alice Williams", job: "Tester", sal: 3000, deptno: 20 },
  ];

  const [empData, setEmpData] = useState(empDataArray);
  const [empNo, setEmpNo] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [deptNo, setDeptNo] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addData = (e) => {
    e.preventDefault();

    let tempArray = [...empData];

    if (isEditing && editIndex !== null) {
      // Update existing employee data
      tempArray[editIndex] = {
        empno: empNo,
        ename: name,
        job: job,
        sal: salary,
        deptno: deptNo,
      };
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new employee data
      let newEmpObj = {
        empno: empNo,
        ename: name,
        job: job,
        sal: salary,
        deptno: deptNo,
      };
      tempArray.push(newEmpObj);
    }

    setEmpData(tempArray);
    resetForm();
  };

  const deleteData = (id) => {
    let tempArray = empData.filter((e) => e.empno !== id);
    setEmpData(tempArray);
  };

  const updateData = (id) => {
    let index = empData.findIndex((emp) => emp.empno === id);
    if (index !== -1) {
      let empToUpdate = empData[index];
      setEmpNo(empToUpdate.empno);
      setName(empToUpdate.ename);
      setJob(empToUpdate.job);
      setSalary(empToUpdate.sal);
      setDeptNo(empToUpdate.deptno);
      setIsEditing(true);
      setEditIndex(index);
    }
  };

  const resetForm = () => {
    setEmpNo("");
    setName("");
    setJob("");
    setSalary("");
    setDeptNo("");
  };

  return (
    <div className="StudentSection">
      <h2>Employee's Details</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>DeptNo</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {empData.map((emp) => (
            <tr key={emp.empno}>
              <td>{emp.empno}</td>
              <td>{emp.ename}</td>
              <td>{emp.job}</td>
              <td>{emp.sal}</td>
              <td>{emp.deptno}</td>
              <td>
                <button onClick={() => deleteData(emp.empno)}>Delete</button>
                <button onClick={() => updateData(emp.empno)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="form">
        <h2>Add new Employee details</h2>
        <input
          placeholder="Emp No"
          type="text"
          className="Input"
          value={empNo}
          onChange={(e) => setEmpNo(e.target.value)}
        />
        <input
          placeholder="Name"
          type="text"
          className="Input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Job"
          type="text"
          className="Input"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input
          placeholder="Salary"
          type="text"
          className="Input"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          placeholder="Dept No"
          type="text"
          className="Input"
          value={deptNo}
          onChange={(e) => setDeptNo(e.target.value)}
        />
        <button onClick={addData}>
          {isEditing ? "Update Data" : "Add Data"}
        </button>
      </form>
    </div>
  );
}

export default EmpDetails;
