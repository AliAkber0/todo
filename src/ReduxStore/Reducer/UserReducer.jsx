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

export const initialState = {
  userList: [],
  isLoading: false,
  loadingMessage: "",
  error: "",
  dispatchedType: "",
};

const userReducer = (state, action) => {
  console.log("reducer called", state, action);
  switch (action.type) {
    case SET_DISPATCH_TYPE_REDUCER: {
      const { dispatchedType } = action;
      return { ...state, dispatchedType };
    }

    case SET_LOADING_REDUCER: {
      const { isLoading, loadingMessage } = action;
      return {
        ...state,
        isLoading,
        loadingMessage,
        error: "",
      };
    }

    case SET_USER_REDUCER: {
      let newUserList = state.userList;
      const { user } = action;
      newUserList.unshift(user);
      return { ...state, userList: newUserList, error: "" };
    }

    case SET_ALL_USERS_REDUCER: {
      const { userList } = action;
      return { ...state, userList, error: "" };
    }

    case GET_USERS_REDUCER: {
      return state;
    }

    case DELETE_USER_REDUCER: {
      const { id } = action;
      const newUserList = state.userList?.filter((user) => user.id !== id);
      return { ...state, userList: newUserList, error: "" };
    }

    case SET_ERROR_REDUCER: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }

    case EDIT_USER_REDUCER: {
      const { id, name } = action;
      const newUserList = state.userList.map((user) => {
        if (user.id === id) {
          return {
            name,
            id,
          };
        }
        return user;
      });

      return { ...state, userList: newUserList, error: "" };
    }

    default: {
      // console.log("default called");
      return state;
    }
  }
};

export default userReducer;
