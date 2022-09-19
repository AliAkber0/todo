import React from "react";
import "../../Styles/addUser.scss";
import Input from "../Input/Input";

class AddUser extends React.PureComponent {
  render() {
    return (
      <Input
        className="add-user"
        placeholder="Add user by name"
        type="text"
        value={this.props.user}
        onChange={this.props.onChangeUserHandler}
        onKeyDown={this.props.addUserHandler}
      />
    );
  }
}

export default AddUser;
