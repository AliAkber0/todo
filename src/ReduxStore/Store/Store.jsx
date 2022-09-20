import userReducer from "../Reducer/UserReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  userReducer,
  {},
  compose(applyMiddleware(...middleware))
);

export default store;
