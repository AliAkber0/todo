import React from "react";
import "../../Styles/button.scss";
class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.type === "delete" ? "button-delete" : "button"}
        onClick={
          this.props.type === "delete"
            ? () => this.props.deleteTodoHandler(this.props.id)
            : this.props.clickHandler
        }
      >
        {this.props.labelText}
      </button>
    );
  }
}

export default Button;
