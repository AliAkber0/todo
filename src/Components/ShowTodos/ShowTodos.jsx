import React, { useContext } from "react";
import List from "../List/List";
import { TodoContext } from "../../Utils/context";
import "../../Styles/showTodos.scss";

const ShowTodos = ({ error }) => {
  const todoContext = useContext(TodoContext);

  if (todoContext.error) {
    return <div className="no-todos-added">{todoContext.error}</div>;
  }
  return todoContext.isLoading ? (
    <div className="loading-todos">{`Loading todos ...`}</div>
  ) : (
    <>
      {todoContext.todoList.length ? (
        <div className="show-todos">
          {todoContext.todoList.map((todo, index) => (
            <List data={todo} key={`${index}-${todo}`} id={index} />
          ))}
        </div>
      ) : (
        <div className="no-todos-added">No todos added</div>
      )}
    </>
  );
};

export default ShowTodos;
