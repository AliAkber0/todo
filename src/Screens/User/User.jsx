import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import { setUser } from "../../ReduxStore/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/user.scss";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  return (
    <div className="todo">
      <AddUser />
      {user.isLoading && (
        <div className="loading-text">{user.loadingMessage}</div>
      )}
      {this.props?.error && <div className="error-text">{user.error}</div>}
      <ShowUsers />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state?.isLoading,
//     loadingMessage: state?.loadingMessage,
//     userList: state?.userList,
//     error: state?.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: (user) => dispatch(setUser(user)),
//   };
// };

export default User;
