import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import "../../Styles/user.scss";
import { setUser } from "../../ReduxStore/Action/Actions";
import { connect } from "react-redux";

class User extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userList: [],
  //     user: "",
  //     isLoading: false,
  //     isUpdating: false,
  //     errorGettingUser: "",
  //     errorAddingUser: "",
  //     errorDeletingUser: "",
  //     errorEditingUser: "",
  //   };
  // }

  componentDidMount() {
    //  this.getUsers();
  }

  setUsers = (users) => {
    // if (users?.length) {
    //   this.setState({
    //     userList: users.map((user) => {
    //       return { name: user.name, id: user.id };
    //     }),
    //     isLoading: false,
    //     errorGettingUser: "",
    //   });
    // } else {
    //   this.setState({
    //     isLoading: false,
    //     errorGettingUser: "error in fetching users",
    //   });
    // }
  };

  getUsers = async () => {
    // this.setState({ isLoading: true });
    // const users = await getUsersData();
    // this.setUsers(users);
  };

  onChangeUserHandler = (e) => {
    // this.setState({ user: e.target.value });
  };

  addUserHandler = async (e) => {
    // if (e.keyCode === 13 && this.state.user) {
    //   this.setState({ isLoading: true });
    //   const response = await addUserData(this.state.user);
    //   if (response?.message) {
    //     this.setState({ errorAddingUser: response.message, isLoading: false });
    //     return;
    //   }
    //   const newUserList = this.state.userList;
    //   newUserList.unshift(response);
    //   this.setState({
    //     userList: newUserList,
    //     user: "",
    //     errorAddingUser: "",
    //     isLoading: false,
    //   });
    // }
  };

  deleteUserHandler = async (id) => {
    // const response = await deleteUser(id);
    // if (response !== 200) {
    //   this.setState({ errorDeletingUser: "Error in deleting the user" });
    //   return;
    // }
    // const newUserList = this.state.userList?.filter((user) => user.id !== id);
    // this.setState({ userList: newUserList, errorDeletingUser: "" });
  };

  editUserHandler = async (id, name) => {
    // this.setState({ isUpdating: true });
    // const response = await editUserData(name, id);
    // if (response?.message) {
    //   this.setState({ errorEditingUser: response.message, isUpdating: false });
    //   return false;
    // }
    // let updatedUserList = this.state.userList?.map((user) => {
    //   if (user.id === id) {
    //     return {
    //       name: name,
    //       id: id,
    //     };
    //   }
    //   return user;
    // });
    // this.setState({
    //   userList: updatedUserList,
    //   user: "",
    //   errorEditingUser: "",
    //   isUpdating: false,
    // });
    // return true;
  };

  clearEditingError = () => {
    // this.setState({ errorEditingUser: "" });
  };

  render() {
    return (
      <div className="todo">
        <AddUser />
        {this.props?.isLoading && (
          <div className="loading-text">{this.props.loadingMessage}</div>
        )}
        {this.props?.error && (
          <div className="error-text">{this.props.error}</div>
        )}

        {/* {this.state.isUpdating && (
          <div className="updating-text">Updating User...</div>
        )}
        {this.state.errorDeletingUser ||
          (this.state.errorEditingUser && (
            <div className="error-text">
              {this.state.errorDeletingUser || this.state.errorEditingUser}
            </div>
          ))} */}
        <ShowUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state?.isLoading,
    loadingMessage: state?.loadingMessage,
    userList: state?.userList,
    error: state?.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
