import React from "react";
import "./TodoCard.css";
const TodoCard = ({ todo, onDelete }) => {
  return (
    <div className="TodoCard">
      <p>{todo}</p>
      <button className="DeleteButton" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
