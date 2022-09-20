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
} from "./ActionTypes";

const dispatchSetAllUsers = (dispatch, response) => {
  dispatch({ type: SET_ALL_USERS, userList: response });
};

const dispatchSetUser = (dispatch, user) => {
  dispatch({ type: SET_USER, user });
};

const dispatchSetLoading = (dispatch, isLoading, loadingMessage) => {
  dispatch({ type: SET_LOADING, isLoading, loadingMessage });
};

const dispatchDeleteUser = (dispatch, id) => {
  dispatch({ type: DELETE_USER, id });
};

const dispatchUpdateUser = (dispatch, name, id) => {
  dispatch({ type: EDIT_USER, name, id });
};

export const setUser = (user) => async (dispatch) => {
  dispatchSetLoading(dispatch, true, "Adding user....");
  const response = await addUserData(user);
  dispatchSetLoading(dispatch, false, "");

  if (response?.message) {
    dispatch({ type: SET_ERROR, error: response.message });
    return;
  }
  dispatchSetUser(dispatch, response);
};

export const getAllUsers = () => async (dispatch) => {
  dispatchSetLoading(dispatch, true, "Getting user....");

  const response = await getUsersData();

  dispatchSetLoading(dispatch, false, "");
  dispatchSetAllUsers(dispatch, response);
};

export const removeUser = (id) => async (dispatch) => {
  dispatchSetLoading(dispatch, true, "Deleting user....");
  const response = await deleteUser(id);
  dispatchSetLoading(dispatch, false, "");

  if (response?.message) {
    dispatch({ type: SET_ERROR, error: response.message });
    return;
  }
  dispatchDeleteUser(dispatch, id);
};

export const updateUser = (name, id) => async (dispatch) => {
  dispatchSetLoading(dispatch, true, "Updating user....");
  const response = await editUserData(name, id);
  dispatchSetLoading(dispatch, false, "Updaing user....");

  if (response?.message) {
    dispatch({ type: SET_ERROR, error: response.message });
    return false;
  }
  dispatchUpdateUser(dispatch, name, id);
  return true;
};
