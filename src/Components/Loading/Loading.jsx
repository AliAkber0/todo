import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/user.scss";

const Loading = () => {
  const user = useSelector((state) => state).toJS();
  return (
    <>
      {user?.isLoading && (
        <div className="loading-text">{user.loadingMessage}</div>
      )}
    </>
  );
};

export default Loading;
