import React from "react";
import Input from "../Input/Input";
import "../../Styles/editUser.scss";
import Button from "../Button/Button";

class EditUser extends React.PureComponent {
  render() {
    return (
      <div className="edit-user">
        <Input
          className="edit-user-input"
          placeholder="Enter new user name"
          type="text"
          value={this.props.editUserInputValue}
          onChange={this.props.editUserInputOnChange}
          onKeyDown={this.props.editUserOnKeyPress}
        />
        <Button labelText="cancel" clickHandler={this.props.cancelEdit} />
      </div>
    );
  }
}

export default EditUser;
