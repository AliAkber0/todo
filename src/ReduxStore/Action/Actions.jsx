import {
  SET_USER,
  DELETE_USER,
  EDIT_USER,
  SET_ERROR_REDUCER,
  GET_USERS,
  SET_USER_REDUCER,
  SET_ALL_USERS_REDUCER,
  DELETE_USER_REDUCER,
  SET_LOADING_REDUCER,
  EDIT_USER_REDUCER,
  SET_DISPATCH_TYPE_REDUCER,
} from "./ActionTypes";

export const setDispatchedTypeReducer = (dispatchedType) => ({
  type: SET_DISPATCH_TYPE_REDUCER,
  dispatchedType,
});

export const getAllUsers = () => ({ type: GET_USERS });

export const setAllUsersReducer = (response) => ({
  type: SET_ALL_USERS_REDUCER,
  userList: response,
});

export const setUser = (user) => ({ type: SET_USER, user });
export const setUserReducer = (user) => ({
  type: SET_USER_REDUCER,
  user,
});

export const removeUser = (id) => ({ type: DELETE_USER, id });
export const removeUserReducer = (id) => ({
  type: DELETE_USER_REDUCER,
  id,
});

export const updateUser = (name, id) => ({ type: EDIT_USER, name, id });
export const updateUserReducer = (name, id) => ({
  type: EDIT_USER_REDUCER,
  name,
  id,
});

export const setLoadingReducer = (isLoading, loadingMessage) => ({
  type: SET_LOADING_REDUCER,
  isLoading,
  loadingMessage,
});

export const setErrorReducer = (error) => ({ type: SET_ERROR_REDUCER, error });
