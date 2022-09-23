import React from "react";
import AddUser from "../../Components/AddUser/AddUser";
import ShowUsers from "../../Components/ShowUsers/ShowUsers";
import { useSelector } from "react-redux";
import "../../Styles/user.scss";

const User = () => {
  const user = useSelector((state) => state).toJS();
  return (
    <div className="user">
      <AddUser />

      <ShowUsers />
    </div>
  );
};

export default User;
