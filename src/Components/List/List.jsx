import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";

const List = ({ data, id, deleteTodoHandler, editHandler }) => {
  return (
    <div className="list">
      <>{data}</>
      <div>
        <Button labelText="Edit" type="edit" editHandler={editHandler} />
        <Button
          id={id}
          labelText="Delete"
          type="delete"
          deleteTodoHandler={deleteTodoHandler}
        />
      </div>
    </div>
  );
};

export default List;
