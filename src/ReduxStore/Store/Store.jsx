import todoReducer from "../Reducer/TodoReducer";
import { createStore } from "redux";

const store = createStore(todoReducer);

export default store;
