import { call, put } from "redux-saga/effects";
import { getUsersData } from "../../../Api/axios";
import {
  setAllUsers,
  setError,
  setLoading,
  setUser,
} from "../../Action/Actions";

// import { setUser } from "../../reducers/userReducer";
// import { requestGetUser } from "../../apis/userApi";
// import { requestWeather } from "../../apis/weatherApi";

export function* handlerSetLoading({ isLoading, loadingMessage }) {
  return put(setLoading(isLoading, loadingMessage));
}

export function* handlerGetUsers(id) {
  console.log(id);
  console.log("Get User Handler");
  const response = yield call(getUsersData);
  console.log(response);
  if (response.message) {
    // return put(setError(response.message));
  }
  yield put(setAllUsers(response));

  // yield put(dispatchSetAllUsers);
  //   try {
  //     const { data } = yield call(requestGetUser);
  //     //console.log("response user", data);
  //     yield put(setUser(data));
  //   } catch (e) {
  //     console.log(e);
  //   }
}

export function* handlerSetAllUser() {
  console.log("Set All User Handler");
}

export function* handlerSetUser(action) {
  console.log("Set User", action.user);
  return put(setUser(action.user));
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
