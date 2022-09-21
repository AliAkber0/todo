import { call, put, select } from "redux-saga/effects";
import { addUserData, deleteUser, getUsersData } from "../../../Api/axios";
import {
  removeUser,
  removeUserReducer,
  setAllUsers,
  setAllUsersReducer,
  setError,
  setLoadingReducer,
  setUser,
  setUserReducer,
} from "../../Action/Actions";

// export function* handlerSetLoading({ isLoading, loadingMessage }) {
//   return put(setLoadingReducer(isLoading, loadingMessage));
// }

export function* handlerGetUsers() {
  // yield put(setLoadingReducer(true, "Getting User..."));
  const response = yield call(getUsersData);
  if (response.message) {
    // return put(setError(response.message));
  }
  yield put(setAllUsersReducer(response));
  // yield put(setLoadingReducer(false, ""));
}

export function* handlerSetAllUser() {}

export function* handlerSetUser(action) {
  // console.log("Set User", action.user);
  // const { user } = action;
  // const response = yield call(addUserData, user);
  // console.log(response, "handler");
  // yield put(setUser(response));
}

export function* handlerAddUser(action) {
  //const { userList } = yield select();
  //console.log(userList);
  const { user } = action;
  const response = yield call(addUserData, user);
  //const newUserList = [response, ...userList];
  // yield put(setUserReducer(newUserList));
  yield put(setUserReducer(response));
}

export function* handleSetError() {
  // return put(setError(error));
}

export function* handlerDeleteUser(action) {
  // const { userList } = yield select();
  console.log(action, "Delete action");
  const { id } = action;
  const response = yield call(deleteUser, id);
  console.log(response);
  if (response.message) {
    return;
  } else {
    // yield put(removeUser(id));
  }
  yield put(removeUserReducer(id));
  // const newUserList = userList?.filter((user) => user.id !== id);
  // yield put(removeUserReducer(newUserList));
}

export function* handlerEditUser() {}
