import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import { useSelector } from "react-redux";
import "../../Styles/user.scss";

const User = () => {
  const user = useSelector((state) => state);
  user && console.log(user);
  return (
    <div className="todo">
      <AddUser />
      {user?.isLoading && (
        <div className="loading-text">{user.loadingMessage}</div>
      )}
      {user?.error && <div className="error-text">{user.error}</div>}
      <ShowUsers />
    </div>
  );
};

export default User;
