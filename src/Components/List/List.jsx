import React, { useContext } from "react";
import Button from "../Button/Button";
import "../../Styles/list.scss";
import { TodoContext } from "../../Utils/context";

const List = ({ data, id }) => {
  const todoContext = useContext(TodoContext);

  return (
    <div className="list">
      <>{data}</>
      <Button
        id={id}
        labelText="Delete"
        type="delete"
        deleteTodoHandler={todoContext.deleteTodoHandler}
      />
    </div>
  );
};

export default List;
