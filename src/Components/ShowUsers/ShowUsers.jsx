import React, { useEffect, useState } from "react";
import List from "../List/List";
import EditUser from "../EditUser/EditUser";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/showUsers.scss";
import { getAllUsers, updateUser } from "../../ReduxStore/Action/Actions";

const ShowUser = () => {
  const user = useSelector((state) => state).toJS();
  const dispatch = useDispatch();

  const [editState, setEditState] = useState({
    editUser: "",
    isEdit: false,
    edit: -1,
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (
      user?.dispatchedType === "updatingUser" &&
      !user?.isLoading &&
      !user?.error
    ) {
      cancelEditUser();
    }
  }, [user?.dispatchedType, user?.isLoading, user?.error]);

  const editUserInputOnChange = (e) => {
    setEditState((prevState) => ({ ...prevState, editUser: e.target.value }));
  };

  const editUser = (id) => {
    setEditState({
      edit: id,
      isEdit: true,
      editUser: user?.userList?.find((user) => user.id === id).name,
    });
  };

  const cancelEditUser = () => {
    setEditState({ edit: -1, isEdit: false, editUser: "" });
  };

  const editUserOnKeyPress = async (e) => {
    if (e.keyCode === 13 && editState.editUser) {
      dispatch(updateUser(editState.editUser, editState.edit));
    }
  };
  return user?.isLoading && !user?.userList?.length ? (
    <div className="loading-user">{`Loading users`}</div>
  ) : (
    <>
      {user?.userList?.length ? (
        <div className="show-users">
          {user?.userList.map((user, index) => {
            if (editState.isEdit && editState.edit === user.id) {
              return (
                <EditUser
                  key={`${index}-${user.id}`}
                  editUserInputValue={editState.editUser}
                  editUserInputOnChange={editUserInputOnChange}
                  cancelEdit={cancelEditUser}
                  editUserOnKeyPress={editUserOnKeyPress}
                />
              );
            }
            return (
              <List
                data={user}
                key={`${index}-${user.id}`}
                editUser={editUser}
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
};

export default ShowUser;
