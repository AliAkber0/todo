import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addUserAsync, updateUserAsync } from "../redux/userActions";

function AddToList() {
  const dispatch = useDispatch();
  const { name, userId } = useSelector((state) => state);
  const [user, setUser] = useState(name);

  useEffect(() => {
    if (name) {
      setUser(name);
    }
  }, [name]);

  return (
    <div className="card">
      <div className="card-data">
        <input
          type="text"
          placeholder="enter title for todo ..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="card-button">
        <button
          onClick={() => {
            setUser("");
            dispatch(addUserAsync(user));
          }}
        >
          Add
        </button>
        <button
          disabled={userId == null}
          className={userId == null ? " disabled " : ""}
          onClick={() => {
            setUser("");
            dispatch(updateUserAsync({ user, userId }));
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default AddToList;
