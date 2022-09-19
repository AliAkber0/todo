import React from "react";
import List from "../List/List";
import { useSelector } from "react-redux";
import "../../Styles/showTodos.scss";

const ShowTodos = ({ deleteTodoHandler }) => {
  const todoList = useSelector((state) => state?.todoList);
  return (
    <>
      {todoList?.length ? (
        <div className="show-todos">
          {todoList.map((todo, index) => (
            <List
              data={todo}
              key={`${index}-${todo}`}
              deleteTodoHandler={deleteTodoHandler}
              id={index}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ShowTodos;
