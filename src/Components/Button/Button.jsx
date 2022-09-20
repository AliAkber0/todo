import React from "react";
import "../../Styles/button.scss";
const Button = ({
  id,
  type,
  labelText,
  clickHandler,
  deleteUserHandler,
  editUser,
}) => {
  const getTypeMethod = () => {
    switch (type) {
      case "delete":
        return () => deleteUserHandler(id);
      case "edit":
        return () => editUser(id);
      default:
        return clickHandler;
    }
  };

  return (
    <button
      className={type === "delete" ? "button-delete" : "button"}
      onClick={getTypeMethod()}
    >
      {labelText}
    </button>
  );
};

export default Button;
