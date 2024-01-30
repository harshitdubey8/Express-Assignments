import React, { useContext } from "react";
import { userDetailsContext } from "../../App";

function Child3() {
  var contextData = useContext(userDetailsContext);
  console.log(contextData);
  return (
    <div>
      {contextData.map((user) => (
        <h2 key={user}>{user} </h2>
      ))}
    </div>
  );
}

export default Child3;
