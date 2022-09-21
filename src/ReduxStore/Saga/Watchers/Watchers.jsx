import { take, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_USERS,
  SET_USER,
  EDIT_USER,
  DELETE_USER,
  SET_ALL_USERS,
  SET_LOADING,
} from "../../Action/ActionTypes";
import {
  handlerGetUsers,
  handlerSetUser,
  handlerDeleteUser,
  handlerEditUser,
  handlerAddUser,
  handlerSetAllUser,
  handlerSetLoading,
} from "../Handlers/Handlers";

export function* watcher() {
  console.log("watcher");
  yield takeLatest(GET_USERS, handlerGetUsers);
  yield takeLatest(EDIT_USER, handlerEditUser);
  yield takeLatest(DELETE_USER, handlerDeleteUser);
  yield takeEvery(SET_USER, handlerAddUser);
}
