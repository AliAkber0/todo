import {
  DELETE_USER_REDUCER,
  SET_ALL_USERS_REDUCER,
  SET_LOADING_REDUCER,
  SET_USER_REDUCER,
  GET_USERS_REDUCER,
  SET_ERROR_REDUCER,
  EDIT_USER_REDUCER,
  SET_DISPATCH_TYPE_REDUCER,
} from "../Action/ActionTypes";
import { fromJS, List } from "immutable";

export const initialState = fromJS({
  userList: List([]),
  isLoading: false,
  loadingMessage: "",
  error: "",
  dispatchedType: "",
});

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_DISPATCH_TYPE_REDUCER: {
      const { dispatchedType } = action;
      return state.set("dispatchedType", dispatchedType);
    }

    case SET_LOADING_REDUCER: {
      const { isLoading, loadingMessage } = action;
      return state
        .set("isLoading", isLoading)
        .set("loadingMessage", loadingMessage)
        .set("error", "");
    }

    case SET_USER_REDUCER: {
      const { user } = action;
      const oldUserList = List(state.toJS().userList);
      const newUserList = List(oldUserList.unshift(user));
      return state.set("userList", newUserList).set("error", "");
    }

    case SET_ALL_USERS_REDUCER: {
      const { userList } = action;
      return state.set("userList", userList);
    }

    case GET_USERS_REDUCER: {
      return state;
    }

    case DELETE_USER_REDUCER: {
      const { id } = action;
      return state
        .set(
          "userList",
          List(state.toJS().userList?.filter((user) => user.id !== id))
        )
        .set("error", "");
    }

    case SET_ERROR_REDUCER: {
      const { error } = action;
      return state.set("error", error);
    }

    case EDIT_USER_REDUCER: {
      const { id, name } = action;
      return state
        .set(
          "userList",
          List(
            state.toJS().userList.map((user) => {
              if (user.id === id) {
                return {
                  name,
                  id,
                };
              }
              return user;
            })
          )
        )
        .set("error", "");
    }

    default: {
      // console.log("default called");
      return state;
    }
  }
};

export default userReducer;
