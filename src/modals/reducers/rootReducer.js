import { combineReducers } from "redux";
import AddReducer from "./reducer";

const rootReducer = combineReducers({ addReducer: AddReducer });

export default rootReducer;
