import React from "react";
import '../App.css';

function addToList({state , setInput , create , update}) {
  return (
    <div className="card">
      <div className="card-data">
        <input
          type="text"
          placeholder="enter title for todo ..."
          value={state.name}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="card-button">
        <button onClick={() => create()}>Add</button>
        <button
          disabled={state.userId == null}
          className={state.userId == null ? " disabled " : ""}
          onClick={() => update()}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default addToList;
