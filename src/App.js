import { useState } from "react";
import AddToDo from "./components/addToDo";
import ListToDos from "./components/listToDos";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState({
    value: "",
    currentId: null,
    list: ["wroking on todo APP"],
  });

  function add() {
    if (todos.currentId == null && todos.value != "") {
      setTodos({ list: [todos.value, ...todos.list], value: "" });
    }
  }

  function updateTodo() {
    if (todos.currentId != null && todos.value != "") {
      setTodos({
        list: [
          todos.value,
          ...todos.list.filter((x, i) => i != todos?.currentId),
        ],
        value: "",
      });
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <AddToDo setTodos={setTodos} add={add} updateTodo={updateTodo} todos={todos}/>
        <ListToDos todos={todos} setTodos={setTodos} />
        {todos?.list?.length != 0 && (
          <div>
            <span>Total Todos {todos?.list?.length}</span>
            <button
              className="del-btn"
              onClick={() => setTodos({ list: [], currentId: null, value: "" })}
            >
              Delete ALL TODOS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
