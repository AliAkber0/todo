import React from "react";
import "../../Styles/button.scss";

class Button extends React.PureComponent {
  getTypeMethod = () => {
    switch (this.props.type) {
      case "delete":
        return () => this.props.deleteUserHandler(this.props.id);
      case "edit":
        return () => this.props.editUser(this.props.id);
      default:
        return this.props.clickHandler;
    }
  };

  render() {
    return (
      <button
        className={this.props.type === "delete" ? "button-delete" : "button"}
        onClick={this.getTypeMethod()}
      >
        {this.props.labelText}
      </button>
    );
  }
}

export default Button;
