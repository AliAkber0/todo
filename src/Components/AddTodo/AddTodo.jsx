import React, { useContext } from "react";
import { TodoContext } from "../../Utils/context";
import "../../Styles/addTodo.scss";

const AddTodo = () => {
  const todoContext = useContext(TodoContext);
  return (
    <input
      className="add-todo"
      placeholder="Add Todo"
      type="text"
      value={todoContext.todo}
      onChange={todoContext.todoOnChangeHandler}
      onKeyDown={(e) => todoContext.addTodoHandler(e, todoContext.todo)}
    />
  );
};

export default AddTodo;
