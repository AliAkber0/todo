import React from "react";
import Input from "../Input/Input";
import "../../Styles/addTodo.scss";

const AddTodo = ({ todo, onChangeTodoHandler, addTodoHandler }) => {
  return (
    <Input
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
