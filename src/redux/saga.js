import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET,
  FETCH_USER,
  ADD,
  ADD_USER,
  EDIT_USER,
  EDIT,
  UPDATE,
  UPDATE_USER,
  DELETE_USER,
  DELETE,
} from "./actionTypes";
import axios from "axios";

function usersFetch() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => data);
}

function addUser(name) {
  const data = axios.post(`https://jsonplaceholder.typicode.com/users`, {
    name,
  });
  console.log(data);
  return data;
}

function UpdateUser({ payload }) {
  return axios.patch(
    `https://jsonplaceholder.typicode.com/users/${payload.id}`,
    {
      id: payload.id,
      name: payload.name,
    }
  );
}

function deleteUser({ payload }) {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${payload}`);
}

function* getUserAsync() {
  try {
    const user = yield call(usersFetch);
    yield put({ type: FETCH_USER, payload: [...user] });
  } catch (e) {
    console.log("error ", e);
  }
}

function* AddUserAsync(action) {
  if (action.payload.trim().length == 0) {
    alert("input feild is empty ::: ");
    return;
  }
  try {
    const user = yield call(addUser, action.payload);
    alert("user added");
    yield put({ type: ADD_USER, payload: action.payload });
  } catch (e) {
    console.log("error ", e);
  }
}

function* editUser(action) {
  try {
    yield put({ type: EDIT_USER, payload: action.payload });
  } catch {
    console.log("error ");
  }
}

function* updateUserAsync(action) {
  try {
    const updatedUser = yield call(UpdateUser, action);
    alert("updated sucessfully ...");
    yield put({ type: UPDATE_USER, payload: action.payload });
  } catch {
    console.log("error ");
  }
}

function* deleteUserAsync(action) {
  try {
    const deletedUser = yield call(deleteUser, action);
    alert("deleted sucessfully ...");
    yield put({ type: DELETE_USER, payload: action.payload });
  } catch {
    console.log("error ");
  }
}

function* mySaga() {
  yield takeEvery(GET, getUserAsync);
  yield takeEvery(ADD, AddUserAsync);
  yield takeEvery(EDIT, editUser);
  yield takeEvery(UPDATE, updateUserAsync);
  yield takeEvery(DELETE, deleteUserAsync);
}

export default mySaga;
