import {
  DELETE_USER_REDUCER,
  SET_ALL_USERS_REDUCER,
  SET_LOADING_REDUCER,
  SET_USER_REDUCER,
  GET_USERS_REDUCER,
} from "../Action/ActionTypes";

const initialState = {
  userList: [],
  isLoading: false,
  loadingMessage: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
      // return { ...state, userList: action.userList };
      let newUserList = state.userList;
      console.log("old user", newUserList);
      const { user } = action;
      newUserList.unshift(user);
      return { ...state, userList: newUserList, error: "" };
    }

    case SET_ALL_USERS_REDUCER: {
      //  console.log("set All users called", action);
      const { userList } = action;
      return { ...state, userList, error: "" };
    }
    case GET_USERS_REDUCER:
      return state;

    case DELETE_USER_REDUCER: {
      // const { id } = action;
      // const newUserList = state.userList?.filter((user) => user.id !== id);
      //return { ...state, userList: newUserList, error: "" };

      return { ...state, userList: action.userList };
    }

    // case DELETE_ALL_USER:
    //   return { ...state, userList: [], error: "" };

    // case EDIT_USER: {
    //   const { id, name } = action;
    //   const newUserList = state.userList.map((user) => {
    //     if (user.id === id) {
    //       return {
    //         name,
    //         id,
    //       };
    //     }
    //     return user;
    //   });
    //   return { ...state, userList: newUserList, error: "" };
    // }

    // case SET_ERROR:
    //   const { error } = action;
    //   return {
    //     ...state,
    //     error,
    //   };

    default:
      return;
  }
};

export default userReducer;
