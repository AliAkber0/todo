import { GET_USER_SUCCCESS } from "../actions";
import { fromJS, List } from "immutable";

export const initialstate = fromJS({
  users: List([]),
  failed: List([]),
  loading: false,
});

const AddReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER_SUCCCESS:
      return state.set("users", action.payload);

    case "LOADING":
      return state.set("loading", action.loading);
    case "ADD_USER":
      const oldUser = List(state.toJS().users);
      const newUser = List(oldUser.push(action.payload));
      return state.set("users", newUser);
    case "USER_FETCH_FAILED":
      return {
        failed: action.payload,
      };
    case "EDIT_USER":
      const updatedUserDetail = action.payload;
      const updatedUser = state.toJS().users.map((user) => {
        if (user.id === updatedUserDetail.id) {
          return updatedUserDetail;
        } else {
          return user;
        }
      });
      return state.set("users", updatedUser);

    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case "DELETE_ALL_USERS":
      return state.set("users", List([]));
    default:
      return state;
  }
};

export default AddReducer;
