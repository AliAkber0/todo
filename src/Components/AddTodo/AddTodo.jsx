import React from "react";
import "../../Styles/addTodo.scss";

const AddTodo = ({ todo, onChangeTodoHandler, addTodoHandler }) => {
  return (
    <input
      className="add-todo"
      placeholder="Add Todo"
      type="text"
      value={todo}
      onChange={onChangeTodoHandler}
      onKeyDown={addTodoHandler}
    />
  );
};

export default AddTodo;
