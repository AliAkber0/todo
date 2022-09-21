import { call, put } from "redux-saga/effects";
import { addUserData, getUsersData } from "../../../Api/axios";
import {
  setAllUsers,
  setAllUsersReducer,
  setError,
  setLoading,
  setUser,
  setUserReducer,
} from "../../Action/Actions";

export function* handlerSetLoading({ isLoading, loadingMessage }) {
  return put(setLoading(isLoading, loadingMessage));
}

export function* handlerGetUsers() {
  console.log("Get User Handler");
  const response = yield call(getUsersData);
  if (response.message) {
    // return put(setError(response.message));
  }
  yield put(setAllUsersReducer(response));
}

export function* handlerSetAllUser() {
  console.log("Set All User Handler");
}

export function* handlerSetUser(action) {
  // console.log("Set User", action.user);
  // const { user } = action;
  // const response = yield call(addUserData, user);
  // console.log(response, "handler");
  // yield put(setUser(response));
}

export function* handlerAddUser(action) {
  console.log("Add User");
  const { user } = action;
  const response = yield call(addUserData, user);
  console.log(response, "res");
  yield put(setUserReducer(response));
}

export function* handleSetError() {
  // return put(setError(error));
}

export function* handlerDeleteUser() {
  console.log("Delete User Handler");
}

export function* handlerEditUser() {
  console.log("Edit User Handler");
}
