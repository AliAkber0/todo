import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";
import { removeUser } from "../../ReduxStore/Action/Actions";
import { useDispatch } from "react-redux";

const List = ({ data, id, editUser }) => {
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="list">
      <div>
        <>{data.name}</>
      </div>
      <div>
        <Button id={id} labelText="Edit" type="edit" editUser={editUser} />
        <Button
          id={id}
          labelText="Delete"
          type="delete"
          deleteUserHandler={deleteUser}
        />
      </div>
    </div>
  );
};

export default List;
