import React, { useState } from "react";
import AddTodo from "../../Components/AddTodo/AddTodo";
import Button from "../../Components/Button/Button";
import ShowTodos from "../../Components/ShowTodos/ShowTodos";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/todo.scss";
import {
  DELETE_ALL_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  SET_TODO,
} from "../../ReduxStore/Action/Action";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state?.todoList);
  const [todo, setTodo] = useState("");

  const onChangeTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodoHandler = (e) => {
    if (e.keyCode === 13 && todo) {
      const newTodoList = todoList?.length ? todoList : [];
      newTodoList.unshift(todo);
      dispatch({ type: SET_TODO, todoList: newTodoList });
      setTodo("");
    }
  };

  const deleteTodoHandler = (id) => {
    dispatch({ type: DELETE_TODO, id });
  };

  const deleteAllTodosHandler = () => {
    dispatch({ type: DELETE_ALL_TODOS });
  };

  const editTodoHandler = (id, newTodo) => {
    dispatch({ type: EDIT_TODO, id, newTodo });
  };

  return (
    <div className="todo">
      <AddTodo
        todo={todo}
        onChangeTodoHandler={onChangeTodoHandler}
        addTodoHandler={addTodoHandler}
      />
      {todoList?.length > 0 && (
        <Button
          labelText="Delete All Todos"
          clickHandler={deleteAllTodosHandler}
        />
      )}
      <ShowTodos
        deleteTodoHandler={deleteTodoHandler}
        editTodoHandler={editTodoHandler}
      />
    </div>
  );
};

export default Todo;
