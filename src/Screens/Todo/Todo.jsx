import React, { useContext } from "react";
import AddTodo from "../../Components/AddTodo/AddTodo";
import Button from "../../Components/Button/Button";
import ShowTodos from "../../Components/ShowTodos/ShowTodos";
import "../../Styles/todo.scss";
import { TodoContext } from "../../Utils/context";

const Todo = () => {
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
  return (
    <div className="todo">
      <AddTodo />
      {todoContext.todoList.length > 0 && (
        <Button
          labelText="Delete All Todos"
          clickHandler={todoContext.deleteAllTodos}
        />
      )}
      <Button
        labelText="Fetch Using Axios"
        clickHandler={todoContext.getTodosUsingAxios}
      />
      <ShowTodos />
    </div>
  );
};

export default Todo;
