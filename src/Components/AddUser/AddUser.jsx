import React, { useState, useEffect } from "react";
import * as ActionFunctions from "../../ReduxStore/Action/Actions";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/addUser.scss";

const AddUser = () => {
  const dispatch = useDispatch();
  const userStateObj = useSelector((state) => state).toJS();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (
      userStateObj?.dispatchedType === "addingUser" &&
      !userStateObj?.isLoading &&
      !userStateObj?.error
    ) {
      resetUserState();
    }
  }, [
    userStateObj?.dispatchedType,
    userStateObj?.isLoading,
    userStateObj?.error,
  ]);

  const resetUserState = () => {
    setUser("");
  };

  const onChangeUserHandler = (e) => {
    setUser(e.target.value);
  };

  const addUserHandler = async (e) => {
    if (e.keyCode === 13 && user) {
      const { setUser } = ActionFunctions;
      dispatch(setUser(user));
    }
  };

  return (
    <Input
      className="add-user"
      placeholder="Add user by name"
      type="text"
      value={user}
      onChange={onChangeUserHandler}
      onKeyDown={addUserHandler}
    />
  );
};

export default AddUser;
