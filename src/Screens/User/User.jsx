import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import "../../Styles/user.scss";
import {
  getUsersData,
  addUserData,
  deleteUser,
  editUserData,
} from "../../Api/axios";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      user: "",
      isLoading: false,
      isUpdating: false,
      errorGettingUser: "",
      errorAddingUser: "",
      errorDeletingUser: "",
      errorEditingUser: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  setUsers = (users) => {
    if (users?.length) {
      this.setState({
        userList: users.map((user) => {
          return { name: user.name, id: user.id };
        }),
        isLoading: false,
        errorGettingUser: "",
      });
    } else {
      this.setState({
        isLoading: false,
        errorGettingUser: "error in fetching users",
      });
    }
  };

  getUsers = async () => {
    this.setState({ isLoading: true });
    const users = await getUsersData();
    this.setUsers(users);
  };

  onChangeUserHandler = (e) => {
    this.setState({ user: e.target.value });
  };

  addUserHandler = async (e) => {
    if (e.keyCode === 13 && this.state.user) {
      this.setState({ isLoading: true });
      const response = await addUserData(this.state.user);
      if (response?.message) {
        this.setState({ errorAddingUser: response.message, isLoading: false });
        return;
      }
      const newUserList = this.state.userList;
      newUserList.unshift(response);
      this.setState({
        userList: newUserList,
        user: "",
        errorAddingUser: "",
        isLoading: false,
      });
    }
  };

  deleteUserHandler = async (id) => {
    const response = await deleteUser(id);
    if (response !== 200) {
      this.setState({ errorDeletingUser: "Error in deleting the user" });
      return;
    }
    const newUserList = this.state.userList?.filter((user) => user.id !== id);
    this.setState({ userList: newUserList, errorDeletingUser: "" });
  };

  editUserHandler = async (id, name) => {
    this.setState({ isUpdating: true });
    const response = await editUserData(name, id);
    if (response?.message) {
      this.setState({ errorEditingUser: response.message, isUpdating: false });
      return false;
    }

    let updatedUserList = this.state.userList?.map((user) => {
      if (user.id === id) {
        return {
          name: name,
          id: id,
        };
      }
      return user;
    });
    this.setState({
      userList: updatedUserList,
      user: "",
      errorEditingUser: "",
      isUpdating: false,
    });
    return true;
  };

  clearEditingError = () => {
    this.setState({ errorEditingUser: "" });
  };

  render() {
    return (
      <div className="todo">
        {this.state.isLoading ? (
          <div className="loading-text">Adding User ....</div>
        ) : (
          <>
            <AddUser
              user={this.state.user}
              onChangeUserHandler={this.onChangeUserHandler}
              addUserHandler={this.addUserHandler}
            />
            {this.state.errorAddingUser && (
              <div className="error-text">{this.state.errorAddingUser}</div>
            )}
          </>
        )}
        {this.state.isUpdating && (
          <div className="updating-text">Updating User...</div>
        )}
        {this.state.errorDeletingUser ||
          (this.state.errorEditingUser && (
            <div className="error-text">
              {this.state.errorDeletingUser || this.state.errorEditingUser}
            </div>
          ))}
        <ShowUsers
          error={this.state.errorGettingUser}
          clearEditingError={this.clearEditingError}
          isLoading={this.state.isLoading}
          userList={this.state.userList}
          deleteUserHandler={this.deleteUserHandler}
          editUserHandler={this.editUserHandler}
        />
      </div>
    );
  }
}

export default User;
