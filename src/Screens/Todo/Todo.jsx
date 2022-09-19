import React, { useEffect, useState } from "react";
import AddTodo from "../../Components/AddTodo/AddTodo";
import Button from "../../Components/Button/Button";
import ShowTodos from "../../Components/ShowTodos/ShowTodos";
import "../../Styles/todo.scss";
import { getDataUsingFetch } from "../../Api/fetch";
import { getDataUsingAxios } from "../../Api/axios";

const Todo = () => {
  // const [todoList, setTodoList] = useState({
  //   todoList: [],
  //   todo: "",
  //   apiMethod: "fetch",
  //   isLoading: false,
  //   error: "",
  // });
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [apiMethod, setApiMethod] = useState("fetch");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getTodosUsingFetch();
  }, []);

  const setTodosHandler = (todos) => {
    if (todos?.length) {
      setTodoList(todos.map((todo) => todo.title));
      setIsLoading(false);
      setError("");
    } else {
      setIsLoading(true);
      setError("error in fetching todos");
    }
  };

  const getTodosUsingAxios = async () => {
    setIsLoading(true);
    setApiMethod("Axios");
    const todos = await getDataUsingAxios();
    setTodosHandler(todos);
  };

  const getTodosUsingFetch = async () => {
    setIsLoading(true);
    const todos = await getDataUsingFetch();
    setTodosHandler(todos);
  };

  const onChangeTodoHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodoHandler = (e) => {
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

  const deleteAllTodosHandler = () => {
    setTodoList([]);
  };

  return (
    <div className="todo">
      <AddTodo
        todo={todo}
        onChangeTodoHandler={onChangeTodoHandler}
        addTodoHandler={addTodoHandler}
      />
      {todoList.length > 0 && (
        <Button
          labelText="Delete All Todos"
          clickHandler={deleteAllTodosHandler}
        />
      )}
      <Button labelText="Fetch Using Axios" clickHandler={getTodosUsingAxios} />
      <ShowTodos
        error={error}
        isLoading={isLoading}
        apiMethod={apiMethod}
        todoList={todoList}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
};

export default Todo;
