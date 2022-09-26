import { fromJS, List } from "immutable";
import {
  DELETE_USER,
  EDIT_USER,
  ADD_USER,
  FETCH_USER,
  UPDATE_USER,
} from "./actionTypes";

export const initailState = fromJS({
  name: "",
  userId: null,
  users: List([]),
});

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return state.set("users", action?.payload);
    case ADD_USER:
      const oldUserList = List(state.toJS().users);
      const newUserList = List(
        oldUserList.push({
          id: oldUserList.size + 1,
          name: action.payload,
        })
      );
      return state.set("users", newUserList);
    case EDIT_USER:
      return state
        .set("name", action.payload.name)
        .set("userId", action.payload.id);
    case UPDATE_USER:
      console.log(state, action.payload);
      const updatedUserList = List(
        state
          .toJS()
          .users.map((x, i) =>
            x.id != action.payload.id ? x : action.payload
          )
      );
      return state
        .set("users", updatedUserList)
        .set("name", "")
        .set("userId", null);
    case DELETE_USER:
      return state.set(
        "users",
        List(state.toJS().users.filter((x, i) => x.id != action.payload))
      );
    default:
      return state;
  }
};
export default reducer;
