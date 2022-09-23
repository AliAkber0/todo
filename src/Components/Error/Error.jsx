import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/user.scss";

const Error = () => {
  const user = useSelector((state) => state).toJS();
  return <>{user?.error && <div className="error-text">{user.error}</div>}</>;
};

export default Error;
