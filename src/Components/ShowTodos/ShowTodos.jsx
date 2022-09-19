import React from "react";
import List from "../List/List";
import "../../Styles/showTodos.scss";

const ShowTodos = ({
  error,
  isLoading,
  apiMethod,
  todoList,
  deleteTodoHandler,
}) => {
  if (error) {
    return <div className="no-todos-added">{error}</div>;
  }
  return isLoading ? (
    <div className="loading-todos">{`Loading todos using ${apiMethod}...`}</div>
  ) : (
    <>
      {todoList.length ? (
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
      ) : (
        <div className="no-todos-added">No todos added</div>
      )}
    </>
  );
};

export default ShowTodos;
