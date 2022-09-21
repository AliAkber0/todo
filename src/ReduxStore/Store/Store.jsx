import userReducer from "../Reducer/UserReducer";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { watcher } from "../Saga/Watchers/Watchers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const store = createStore(
  userReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(watcher);
export default store;
