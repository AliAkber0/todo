import React, { useState } from "react";
import * as ActionFunctions from "../../ReduxStore/Action/Actions";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import "../../Styles/addUser.scss";

const AddUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const onChangeUserHandler = (e) => {
    setUser(e.target.value);
  };

  const addUserHandler = async (e) => {
    if (e.keyCode === 13 && user) {
      const { setUser } = ActionFunctions;
      console.log(setUser, user);
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: (user) => dispatch(setUser(user)),
//   };
// };

// export default connect(null, mapDispatchToProps)(AddUser);
