import React from "react";
import List from "../List/List";
import EditUser from "../EditUser/EditUser";
import { getAllUsers, updateUser } from "../../ReduxStore/Action/Actions";
import { connect } from "react-redux";
import "../../Styles/showUsers.scss";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: "",
      isEdit: false,
      edit: -1,
    };
  }
  componentDidMount() {
    this.props.getAllUsers();
  }

  editUserInputOnChange = (e) => {
    this.setState({ editUser: e.target.value });
  };

  editUser = (id) => {
    this.setState({
      edit: id,
      isEdit: true,
      editUser: this.props.userList.find((user) => user.id === id).name,
    });
  };

  cancelEditUser = () => {
    this.setState({ edit: -1, isEdit: false, editUser: "" });
  };

  editUserOnKeyPress = async (e) => {
    if (e.keyCode === 13 && this.state.editUser) {
      const isSuccesfull = await this.props.updateUser(
        this.state.editUser,
        this.state.edit
      );
      isSuccesfull && this.cancelEditUser();
    }
  };

  render() {
    return this.props?.isLoading && !this.props.userList?.length ? (
      <div className="loading-user">{`Loading users`}</div>
    ) : (
      <>
        {this.props.userList?.length ? (
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

const mapStateToProps = (state) => {
  return {
    userList: state?.userList,
    isLoading: state?.isLoading,
    loadingMessage: state?.loadingMessage,
    error: state?.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    updateUser: (name, id) => dispatch(updateUser(name, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
