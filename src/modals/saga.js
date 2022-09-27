import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_USER_FETCH, GET_USER_SUCCCESS } from "./actions";
async function userfetch() {
  const Response = await fetch("https://jsonplaceholder.typicode.com/users");
  return Response.json();
}

function* fetchUser(action) {
  try {
    yield put({ type: "LOADING", loading: true });
    const users = yield call(userfetch);
    yield put({ type: GET_USER_SUCCCESS, payload: users });
    yield put({ type: "LOADING", loading: false });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("GET_USER_FETCH", fetchUser);
}

export default mySaga;
