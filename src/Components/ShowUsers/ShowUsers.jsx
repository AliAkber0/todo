import React from "react";
import List from "../List/List";
import "../../Styles/showUsers.scss";
import EditUser from "../EditUser/EditUser";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: "",
      isEdit: false,
      edit: -1,
    };
  }

  editUserInputOnChange = (e) => {
    this.setState({ editUser: e.target.value });
  };

  editUser = (id) => {
    this.setState({ edit: id, isEdit: true, editUser: "" });
  };

  cancelEditUser = () => {
    this.setState({ edit: -1, isEdit: false, editUser: "" });
    this.props.clearEditingError();
  };

  editUserOnKeyPress = async (e) => {
    if (e.keyCode === 13 && this.state.editUser) {
      const isSuccesfull = await this.props.editUserHandler(
        this.state.edit,
        this.state.editUser
      );
      isSuccesfull && this.cancelEditUser();
    }
  };

  render() {
    if (this.props.error) {
      return <div className="no-users-added">{this.props.error}</div>;
    }
    return this.props.isLoading && !this.props.userList.length ? (
      <div className="loading-user">{`Loading users`}</div>
    ) : (
      <>
        {}
        {this.props.userList.length ? (
          <div className="show-users">
            {this.props.userList.map((user, index) => {
              if (this.state.isEdit && this.state.edit === user.id) {
                return (
                  <EditUser
                    key={`${index}-${user.id}`}
                    editUserInputValue={this.state.editUser}
                    editUserInputOnChange={this.editUserInputOnChange}
                    cancelEdit={this.cancelEditUser}
                    editUserOnKeyPress={this.editUserOnKeyPress}
                  />
                );
              }
              return (
                <List
                  data={user}
                  key={`${index}-${user.id}`}
                  deleteUserHandler={this.props.deleteUserHandler}
                  editUser={this.editUser}
                  id={user.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-users-added">No users added</div>
        )}
      </>
    );
  }
}

export default ShowUser;
