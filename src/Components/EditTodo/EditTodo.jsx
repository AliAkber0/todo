import React from "react";
import Input from "../Input/Input";
import "../../Styles/editTodo.scss";
import Button from "../Button/Button";

const EditTodo = ({
  id,
  editUserInputValue,
  editUserInputOnChange,
  editUserOnKeyPress,
  cancelEdit,
}) => {
  return (
    <div className="edit-todo">
      <Input
        className="edit-todo-input"
        placeholder="Enter new todo"
        type="text"
        value={editUserInputValue}
        onChange={editUserInputOnChange}
        onKeyDown={editUserOnKeyPress}
      />
      <Button labelText="cancel" clickHandler={cancelEdit} />
    </div>
  );
};

export default EditTodo;
