import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer, { initailState } from "./userReducers";
import { combineReducers } from "redux-immutable";
import mySaga from "./saga";
import createSagaMiddleware from "redux-saga";
const SagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
});
const store = createStore(
  userReducer,
  initailState,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);
SagaMiddleware.run(mySaga);
export default store;
