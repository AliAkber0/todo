import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./userReducers";
import mySaga from './saga';
import createSagaMiddleware from "redux-saga";
const SagaMiddleware = createSagaMiddleware();

const store = createStore(
  userReducer,
  {},
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);
SagaMiddleware.run(mySaga);
export default store;
