import {all} from "redux-saga/effects"
import watcherUserSaga from "./handler/fetchUsers"
export default function* rootSaga(){
    yield all([watcherUserSaga()])
}
