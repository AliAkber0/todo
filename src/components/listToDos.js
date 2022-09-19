import React, { useContext } from "react";
import { TodoContext } from "../App";

function ListToDos() {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <ul>
      {todos?.list?.map((todo, i) => (
        <li key={i}>
          <span>{todo}</span>
          <div>
            <button
              className="edt-btn"
              onClick={() => setTodos({ ...todos, value: todo, currentId: i })}
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
  );
}

export default ListToDos;
