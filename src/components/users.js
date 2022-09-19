import React, { Component } from "react";
import "../my-sass.scss";

const users = (props) => {
  const { todo, fooDelete, update } = props;
  const [user, setUser] = [{ id: "", editing: false, content: "" }];
  const updateUser = {
    ...user,
    editing: true,
  };

  return (
    <div className="todo-list">
      <div className="user-list">
        <p style={{ marginRight: 20 }}>{todo.id}:</p>
        <p> {props.todo.name}</p>
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <button onClick={fooDelete}>Delete</button>
      </div>
    </div>
  );
};
export default users;
