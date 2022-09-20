import {
  DELETE_ALL_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USERS,
  SET_ALL_USERS,
  SET_ERROR,
  SET_LOADING,
  SET_USER,
} from "../Action/ActionTypes";

const initialState = {
  userList: [],
  isLoading: false,
  loadingMessage: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      const { isLoading, loadingMessage } = action;
      return {
        ...state,
        isLoading,
        loadingMessage,
        error: "",
      };

    case SET_USER:
      let newUserList = state.userList;
      const { user } = action;
      newUserList.unshift(user);
      return { ...state, userList: newUserList, error: "" };

    case SET_ALL_USERS:
      const { userList } = action;
      return { ...state, userList, error: "" };

    case GET_USERS:
      return state;

    case DELETE_USER: {
      const { id } = action;
      const newUserList = state.userList?.filter((user) => user.id !== id);
      return { ...state, userList: newUserList, error: "" };
    }

    case DELETE_ALL_USER:
      return { ...state, userList: [], error: "" };

    case EDIT_USER: {
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

    case SET_ERROR:
      const { error } = action;
      return {
        ...state,
        error,
      };
    default:
      return;
  }
};

export default userReducer;
