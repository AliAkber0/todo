import React, { useEffect, useState } from "react";
import List from "../List/List";
import EditUser from "../EditUser/EditUser";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/showUsers.scss";
import { getAllUsers, setLoading } from "../../ReduxStore/Action/Actions";

const ShowUser = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editState, setEditState] = useState({
    editUser: "",
    isEdit: false,
    edit: -1,
  });

  useEffect(() => {
    // dispatch(setLoading(true, "Getting Users..."));
    dispatch(getAllUsers());
  }, []);

  // componentDidMount() {
  //   this.props.getAllUsers();
  // }

  const editUserInputOnChange = (e) => {
    setEditState((prevState) => ({ ...prevState, editUser: e.target.value }));
  };

  const editUser = (id) => {
    setEditState({
      edit: id,
      isEdit: true,
      editUser: this.props.userList.find((user) => user.id === id).name,
    });
  };

  const cancelEditUser = () => {
    setEditState({ edit: -1, isEdit: false, editUser: "" });
  };

  const editUserOnKeyPress = async (e) => {
    if (e.keyCode === 13 && this.state.editUser) {
      //   const isSuccesfull = await this.props.updateUser(
      //     this.state.editUser,
      //     this.state.edit
      //   );
      //   isSuccesfull && this.cancelEditUser();
      // }
    }
  };

  return user?.isLoading && !user?.userList?.length ? (
    <div className="loading-user">{`Loading users`}</div>
  ) : (
    <>
      {user?.userList?.length ? (
        <div className="show-users">
          {user?.userList.map((user, index) => {
            console.log(user, "user map");
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

// const mapStateToProps = (state) => {
//   return {
//     userList: state?.userList,
//     isLoading: state?.isLoading,
//     loadingMessage: state?.loadingMessage,
//     error: state?.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllUsers: () => dispatch(getAllUsers()),
//     updateUser: (name, id) => dispatch(updateUser(name, id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
