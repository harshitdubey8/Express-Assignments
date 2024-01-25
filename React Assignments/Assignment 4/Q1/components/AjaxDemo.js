import axios from "axios";
import React, { useState } from "react";
import "./AjaxDemo.css";

function AjaxDemo() {
  const [empData, setEmpData] = useState([]);

  const getData = () => {
    let url = "https://reqres.in/api/users";

    axios.get(url).then((res) => {
      console.log(res.data.data);

      setEmpData(res.data.data);
    });
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {empData.map((item) => (
        <div className="Card" key={item.id}>
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AjaxDemo;
