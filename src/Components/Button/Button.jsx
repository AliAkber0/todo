import React from "react";
import "../../Styles/button.scss";
const Button = ({ id, type, deleteTodoHandler, clickHandler, labelText }) => {
  return (
    <button
      className={type === "delete" ? "button-delete" : "button"}
      onClick={type === "delete" ? () => deleteTodoHandler(id) : clickHandler}
    >
      {labelText}
    </button>
  );
};

export default Button;
