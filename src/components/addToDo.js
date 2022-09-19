import React from "react";

function AddToDo({setTodos, todos, add, updateTodo}) {
  return (
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
        onClick={() => add()}
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
  );
}

export default AddToDo;
