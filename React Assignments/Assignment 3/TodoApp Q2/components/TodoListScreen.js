import React, { Component } from "react";
import TodoCard from "./TodoCard";
import "./TodoListScreen.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== "") {
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: "",
      });
    }
  };

  removeTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="TodoScreen">
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            placeholder="Add new todo"
          />
          <button className="AddButton" onClick={this.addTodo}>
            Add
          </button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <TodoCard
              key={index}
              todo={todo}
              onDelete={() => this.removeTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
