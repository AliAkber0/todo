import React, { Component, useState } from "react";

const AddTodo = (props) => {
  const [value, setValue] = useState();

  const addTodo = () => {
    props.fooAddTodo(value);
  };

  return (
    <div className="NewPost">
      <h1>Add a User</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="add-button">
        <button onClick={addTodo} className="add-button">
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
