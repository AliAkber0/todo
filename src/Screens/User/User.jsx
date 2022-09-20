import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import "../../Styles/user.scss";
import { setUser } from "../../ReduxStore/Action/Actions";
import { connect } from "react-redux";

class User extends React.Component {
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
