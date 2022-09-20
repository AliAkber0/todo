import {
  getUsersData,
  addUserData,
  deleteUser,
  editUserData,
} from "../../Api/axios";
import {
  SET_USER,
  DELETE_USER,
  EDIT_USER,
  SET_ERROR,
  SET_LOADING,
  SET_ALL_USERS,
  GET_USERS,
} from "./ActionTypes";

export const getAllUsers = (id) => ({ type: GET_USERS, id });

export const setAllUsers = (response) => ({
  type: SET_ALL_USERS,
  userList: response,
});

export const setUser = (user) => ({ type: SET_USER, name: user });

export const setLoading = (isLoading, loadingMessage) => ({
  type: SET_LOADING,
  isLoading,
  loadingMessage,
});

export const removeUser = (id) => ({ type: DELETE_USER, id });

export const updateUser = (name, id) => ({
  type: EDIT_USER,
  name,
  id,
});

export const setError = (error) => ({ type: SET_ERROR, error });

// export const setUser = (user) => async (dispatch) => {
//   dispatchSetLoading(dispatch, true, "Adding user....");
//   const response = await addUserData(user);
//   dispatchSetLoading(dispatch, false, "");

//   if (response?.message) {
//     dispatch({ type: SET_ERROR, error: response.message });
//     return;
//   }
//   dispatchSetUser(dispatch, response);
// };

// export const getAllUsers = async (dispatch) => {
//   dispatchSetLoading(dispatch, true, "Getting user....");

//   const response = await getUsersData();

//   dispatchSetLoading(dispatch, false, "");
//   dispatchSetAllUsers(dispatch, response);
// };

// export const removeUser = (id) => async (dispatch) => {
//   dispatchSetLoading(dispatch, true, "Deleting user....");
//   const response = await deleteUser(id);
//   dispatchSetLoading(dispatch, false, "");

//   if (response?.message) {
//     dispatch({ type: SET_ERROR, error: response.message });
//     return;
//   }
//   dispatchDeleteUser(dispatch, id);
// };

// export const updateUser = (name, id) => async (dispatch) => {
//   dispatchSetLoading(dispatch, true, "Updating user....");
//   const response = await editUserData(name, id);
//   dispatchSetLoading(dispatch, false, "Updaing user....");

//   if (response?.message) {
//     dispatch({ type: SET_ERROR, error: response.message });
//     return false;
//   }
//   dispatchUpdateUser(dispatch, name, id);
//   return true;
// };
