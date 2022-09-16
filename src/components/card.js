import React from "react";

function card({ withFetch, _delete, setEdit }) {
  return (
    withFetch.length > 0 &&
    withFetch?.map((user, i) => (
      <div className="card" key={user?.id}>
        <div className="card-data">
          <span>{user.id}</span>
          <p className="title">{user.name}</p>
        </div>
        <div className="card-button">
          <button onClick={() => setEdit(user.name, user?.id)}>Edit</button>
          <button onClick={() => _delete(user?.id)}>Delete</button>
        </div>
      </div>
    ))
  );
}

export default card;
