import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoListScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
