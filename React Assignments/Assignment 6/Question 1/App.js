import { useState, React, createContext } from "react";
import "./App.css";
import Child1 from "./components/useContextExample/child1";

export var userDetailsContext = createContext(null);

function App() {
  function logout_click() {
    sessionStorage.removeItem("user-token");
  }

  const [usersArray, setUserArray] = useState([
    "Harshit",
    "Sameer",
    "Vaishnavi",
    "Vineet",
  ]);

  return (
    <div>
      <h2>Welcome to The home screen</h2>
      <button onClick={logout_click}>logout</button>
      <userDetailsContext.Provider value={usersArray}>
        <Child1 />
      </userDetailsContext.Provider>
    </div>
  );
}

export default App;
