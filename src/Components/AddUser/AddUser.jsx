import React from "react";
import { setUser } from "../../ReduxStore/Action/Actions";
import Input from "../Input/Input";
import { connect } from "react-redux";
import "../../Styles/addUser.scss";

class AddUser extends React.PureComponent {
  constructor() {
    super();
    this.state = { user: "" };
  }

  onChangeUserHandler = (e) => {
    this.setState({ user: e.target.value });
  };

  addUserHandler = async (e) => {
    if (e.keyCode === 13 && this.state.user) {
      this.props.addUser(this.state.user);
      // this.setState({ isLoading: true });
      // const response = await addUserData(this.state.user);
      // if (response?.message) {
      //   this.setState({ errorAddingUser: response.message, isLoading: false });
      //   return;
      // }
      // const newUserList = this.state.userList;
      // newUserList.unshift(response);
      // this.setState({
      //   userList: newUserList,
      //   user: "",
      //   errorAddingUser: "",
      //   isLoading: false,
      // });
    }
  };

  render() {
    return (
      <Input
        className="add-user"
        placeholder="Add user by name"
        type="text"
        value={this.state.user}
        onChange={this.onChangeUserHandler}
        onKeyDown={this.addUserHandler}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
