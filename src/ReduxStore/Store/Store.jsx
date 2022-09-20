import userReducer from "../Reducer/UserReducer";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { watcher } from "../Saga/Watchers/Watchers";

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const store = createStore(
  userReducer,
  {},
  compose(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(watcher);
export default store;
