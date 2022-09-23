import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";
import { removeUser } from "../../ReduxStore/Action/Actions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const List = ({ data, id, editUser }) => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="list">
      <div className="list-name">
        <>{data.name}</>
      </div>
      <div>
        {path === "/edit-user" && (
          <Button id={id} labelText="Edit" type="edit" editUser={editUser} />
        )}
        {path === "/delete-user" && (
          <Button
            id={id}
            labelText="Delete"
            type="delete"
            deleteUserHandler={deleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default List;
