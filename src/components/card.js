import React from "react";

function card({ withAxios, _delete, setEdit }) {
  return (
    withAxios?.length > 0 &&
    withAxios?.map((user, i) => (
      <div className="card" key={user?.id} >
        <div className="card-data">
          <span>{user?.id}</span>
          <p className="title">{user?.name}</p>
        </div>
        <div className="card-button">
          <button onClick={() => setEdit(user?.name, user?.id)}>Edit</button>
          <button onClick={() => _delete(user?.id)}>Delete</button>
        </div>
      </div>
    ))
  );
}

export default card;
