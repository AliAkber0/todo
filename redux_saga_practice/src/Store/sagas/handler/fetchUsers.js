import {call, put, takeEvery} from "redux-saga/effects"
import fetchGetUsers from "../request/fetchUsers"

function* handleGetUsers(){
    try{
        const users = yield call(fetchGetUsers)
        yield put({type: "GET_USER_SUCCESS", users:users})
    }
    catch(err){
        yield put({type: "GET_USER_FAILED", message : err.message})
    }
}

function* watcherUserSaga(){
    yield takeEvery("GET_USER_REQUESTED",handleGetUsers);
}

export default watcherUserSaga