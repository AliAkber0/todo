import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, userEdit } from "../redux/userActions";

function Card({ users }) {
  const dispatch = useDispatch();
  return (
    users?.length > 0 &&
    users?.map((user, i) => (
      <div className="card" key={i}>
        <div className="card-data">
          <span>{user?.id}</span>
          <p className="title">{user?.name}</p>
        </div>
        <div className="card-button">
          <button
            onClick={() =>
              dispatch(userEdit({ name: user?.name, id: user?.id }))
            }
          >
            Edit
          </button>
          <button onClick={() => dispatch(deleteUser(user?.id))}>
            Delete
          </button>
        </div>
      </div>
    ))
  );
}

export default Card;
