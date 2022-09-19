import React, { useState } from "react";
import List from "../List/List";
import { useSelector } from "react-redux";
import "../../Styles/showTodos.scss";
import EditTodo from "../EditTodo/EditTodo";

const ShowTodos = ({ deleteTodoHandler, editTodoHandler }) => {
  const todoList = useSelector((state) => state?.todoList);
  const [editState, setEditState] = useState({
    editTodo: "",
    isEdit: false,
    edit: -1,
  });

  const editTodoInputOnChange = (e) => {
    setEditState((prevState) => ({ ...prevState, editTodo: e.target.value }));
  };

  const editTodo = (id) => {
    setEditState({
      edit: id,
      isEdit: true,
      editTodo: todoList.find((_, index) => index === id),
    });
  };

  const cancelEditTodo = () => {
    setEditState({ edit: -1, isEdit: false, editTodo: "" });
  };

  const editTodoOnKeyPress = async (e) => {
    if (e.keyCode === 13 && editState.editTodo) {
      editTodoHandler(editState.edit, editState.editTodo);
      cancelEditTodo();
    }
  };
  return (
    <>
      {todoList?.length ? (
        <div className="show-todos">
          {todoList.map((todo, index) => {
            if (editState.isEdit && index === editState.edit) {
              return (
                <EditTodo
                  key={`${index}-${todo}`}
                  editUserInputValue={editState.editTodo}
                  editUserInputOnChange={editTodoInputOnChange}
                  editUserOnKeyPress={editTodoOnKeyPress}
                  cancelEdit={cancelEditTodo}
                />
              );
            }
            return (
              <List
                data={todo}
                key={`${index}-${todo}`}
                deleteTodoHandler={deleteTodoHandler}
                editHandler={editTodo}
                id={index}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default ShowTodos;
