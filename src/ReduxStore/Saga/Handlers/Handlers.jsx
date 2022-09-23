import { call, put } from "redux-saga/effects";
import {
  addUserData,
  deleteUser,
  editUserData,
  getUsersData,
} from "../../../Api/axios";
import {
  removeUserReducer,
  setAllUsersReducer,
  setDispatchedTypeReducer,
  setErrorReducer,
  setLoadingReducer,
  setUserReducer,
  updateUserReducer,
} from "../../Action/Actions";

export function* handlerGetUsers() {
  yield put(setDispatchedTypeReducer("gettingUsers"));
  yield put(setLoadingReducer(true, "Getting users...."));

  const response = yield call(getUsersData);

  yield put(setLoadingReducer(false, ""));
  if (response.message) {
    yield put(setErrorReducer(response.message));
    return;
  }

  yield put(setAllUsersReducer(response.data));
}

export function* handlerAddUser(action) {
  const { user } = action;
  yield put(setDispatchedTypeReducer("addingUser"));
  yield put(setLoadingReducer(true, "Adding user...."));

  const response = yield call(addUserData, user);

  yield put(setLoadingReducer(false, ""));

  if (response.message) {
    yield put(setErrorReducer(response.message));
    return;
  }

  yield put(setUserReducer(response));
}

export function* handlerDeleteUser(action) {
  const { id } = action;

  yield put(setDispatchedTypeReducer("deletingUser"));
  yield put(setLoadingReducer(true, "Deleting user...."));

  const response = yield call(deleteUser, id);

  yield put(setLoadingReducer(false, ""));

  if (response.message) {
    yield put(setErrorReducer(response.message));
    return;
  }

  yield put(removeUserReducer(id));
}

export function* handlerEditUser(action) {
  const { name, id } = action;
  yield put(setDispatchedTypeReducer("updatingUser"));
  yield put(setLoadingReducer(true, "Updating user...."));

  const response = yield call(editUserData, name, id);

  yield put(setLoadingReducer(false, ""));

  if (response.message) {
    yield put(setErrorReducer(response.message));
    return false;
  }

  yield put(updateUserReducer(response.name, id));
  return true;
}
