import React, { useState } from "react";
import "./DocDetails.css";

function DocDetails() {
  const doctorData = [
    {
      doctorId: 1,
      doctorName: "Dr. John Smith",
      designation: "Cardiologist",
      experience: "10 years",
      contactNumber: "+1 123-456-7890",
    },
    {
      doctorId: 2,
      doctorName: "Dr. Emily Johnson",
      designation: "Orthopedic Surgeon",
      experience: "8 years",
      contactNumber: "+1 987-654-3210",
    },
    {
      doctorId: 3,
      doctorName: "Dr. Maria Garcia",
      designation: "Pediatrician",
      experience: "12 years",
      contactNumber: "+1 555-123-4567",
    },
  ];
  const [docData, setDocData] = useState(doctorData);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [exp, setExp] = useState("");
  const [contact, setContact] = useState("");

  //method to add new doc data
  const addData = (e) => {
    e.preventDefault();

    let tempArray = [...docData];
    let newDocObj = {
      doctorId: tempArray.length + 1,
      doctorName: name,
      designation: designation,
      experience: exp,
      contactNumber: contact,
    };
    tempArray.push(newDocObj);

    setDocData(tempArray);
  };

  // delete the data
  const deleteData = (id) => {
    let tempArray = [...docData];

    let modifiedArray = tempArray.filter((e) => e.doctorId != id);

    setDocData(modifiedArray);
  };

  // update data

  return (
    <div className="StudentSection">
      <h2>Student Details</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Experience</th>
          <th>Contact</th>
          <th>Delete</th>
        </tr>

        <tbody>
          {docData.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.designation}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.contactNumber}</td>
              <td>
                <button onClick={() => deleteData(doctor.doctorId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="form">
        <h2>Add new Doc details</h2>
        <input
          placeholder="Name"
          type="text"
          className="Input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Designation"
          type="text"
          className="Input"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          placeholder="Experience"
          type="text"
          className="Input"
          value={exp}
          onChange={(e) => setExp(e.target.value)}
        />
        <input
          placeholder="Contact"
          type="text"
          className="Input"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button onClick={addData}> Add Data </button>
      </form>
    </div>
  );
}

export default DocDetails;
