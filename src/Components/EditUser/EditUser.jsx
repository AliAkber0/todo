import React from "react";
import Input from "../Input/Input";
import "../../Styles/editUser.scss";
import Button from "../Button/Button";

const EditUser = ({
  editUserInputValue,
  editUserInputOnChange,
  editUserOnKeyPress,
  cancelEdit,
}) => {
  return (
    <div className="edit-user">
      <Input
        className="edit-user-input"
        placeholder="Enter new user name"
        type="text"
        value={editUserInputValue}
        onChange={editUserInputOnChange}
        onKeyDown={editUserOnKeyPress}
      />
      <Button labelText="cancel" clickHandler={cancelEdit} />
    </div>
  );
};

export default EditUser;
