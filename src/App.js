import { useState } from "react";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState({
    value: "",
    currentId: null,
    list: ["wroking on todo APP"],
  });

  function AddToDo() {
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
        <div className="todo">
          <input
            type="text"
            value={todos?.value}
            placeholder="add todo"
            onChange={(e) => setTodos({ ...todos, value: e.target.value })}
          />
          <button
            className="add-btn"
            disabled={todos?.value?.trim().length <= 0}
            onClick={() => AddToDo()}
          >
            Add
          </button>
          <button
            className="upd-btn"
            disabled={todos.value == "" && todos?.currentId == null}
            onClick={() => updateTodo()}
          >
            Update
          </button>
        </div>
        <ul>
          {todos?.list?.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>
              <div>
                <button
                  className="edt-btn"
                  onClick={() =>
                    setTodos({ ...todos, value: todo, currentId: i })
                  }
                >
                  Edit
                </button>
                <button
                  className="del-btn"
                  onClick={() =>
                    setTodos({
                      ...todos,
                      list: todos?.list.filter((todo, index) => i != index),
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
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
