import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoActions";

function AddToDo() {
  const dispatch = useDispatch();
  const { value, currentId, edit } = useSelector((state) => state);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (value) {
      setTodo(value);
    }
  }, [value]);

  return (
    <div className="todo">
      <input
        type="text"
        value={todo}
        placeholder="add todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="add-btn"
        disabled={todo?.trim().length == 0 }
        onClick={() => {
          dispatch(addTodo(todo));
          setTodo("");
        }}
      >
        Add
      </button>
      <button
        className="upd-btn"
        disabled={todo?.trim().length <= 0 && currentId == null}
        onClick={() => {
          dispatch(updateTodo({ value: todo, currentId }));
          setTodo("");
        }}
      >
        Update
      </button>
    </div>
  );
}

export default AddToDo;
