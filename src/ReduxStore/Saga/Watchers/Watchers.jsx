import { takeLatest } from "redux-saga/effects";
import {
  GET_USERS,
  SET_USER,
  EDIT_USER,
  DELETE_USER,
} from "../../Action/ActionTypes";
import {
  handlerGetUsers,
  handlerDeleteUser,
  handlerEditUser,
  handlerAddUser,
} from "../Handlers/Handlers";

export function* watcher() {
  console.log("watcher");
  yield takeLatest(GET_USERS, handlerGetUsers);
  yield takeLatest(EDIT_USER, handlerEditUser);
  yield takeLatest(DELETE_USER, handlerDeleteUser);
  yield takeLatest(SET_USER, handlerAddUser);
}
