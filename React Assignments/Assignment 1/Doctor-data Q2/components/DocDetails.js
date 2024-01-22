import React from "react";
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
        </tr>

        <tbody>
          {doctorData.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.designation}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocDetails;
