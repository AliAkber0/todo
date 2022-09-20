import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actionTypes";
import { editTodo } from "../redux/todoActions";

function ListToDos() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state);
  return (
    <ul>
      {list && list?.map((todo, i) => (
        <li key={i}>
          <span>{todo}</span>
          <div>
            <button
              className="edt-btn"
              onClick={() => dispatch(editTodo({ value: todo, currentId: i , edit: true }))}
            >
              Edit
            </button>
            <button
              className="del-btn"
              onClick={() => dispatch({ type: DELETE, currentId: i })}
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
