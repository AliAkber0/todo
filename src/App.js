import React, { useEffect, useState } from "react";
import Todo from "./Screens/Todo/Todo";
import { getDataUsingAxios } from "./Api/axios";
import { getDataUsingFetch } from "./Api/fetch";
import { TodoContext } from "./Utils/context";
import "./Styles/app.scss";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataUsingFetch();
    setTodosHandler(data);
  };

  const getTodosUsingAxios = async () => {
    const data = await getDataUsingAxios();
    setTodosHandler(data);
  };
  const deleteAllTodos = () => {
    setTodoList([]);
  };

  const todoOnChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const setTodosHandler = (todos) => {
    setIsLoading(false);
    if (todos && todos?.length) {
      setTodoList(todos.map((todo) => todo.title));
      setError("");
    } else {
      setError("error in fetching todos");
    }
  };

  const addTodoHandler = (e, todo) => {
    if (e.keyCode === 13 && todo) {
      let newTodoList = todoList;
      newTodoList.unshift(todo);

      setTodoList(newTodoList);
      setTodo("");
      setError("");
    }
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todoList?.filter((_, index) => index !== id);
    setTodoList(newTodoList);
  };

  const contextValue = {
    todoList,
    todo,
    todoOnChangeHandler,
    addTodoHandler,
    deleteTodoHandler,
    deleteAllTodos,
    error,
    isLoading,
    getTodosUsingAxios,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <div className="app">
        <h3>Todo App Function Components Context Api</h3>
        <Todo />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
