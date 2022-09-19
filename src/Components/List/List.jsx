import React from "react";
import "../../Styles/list.scss";
import Button from "../Button/Button";

const List = ({ data, id, deleteTodoHandler }) => {
  return (
    <div className="list">
      <>{data}</>
      <Button
        id={id}
        labelText="Delete"
        type="delete"
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
};

export default List;
