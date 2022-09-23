import {
  DELETE_USER,
  EDIT_USER,
  ADD_USER,
  FETCH_USER,
  UPDATE_USER,
} from "./actionTypes";

const initailState = {
  name: "",
  userId: null,
  withAxios: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        withAxios: [...action?.payload],
      };
    case ADD_USER:
      return {
        ...state,
        withAxios: [
          ...state.withAxios,
          { id: state.withAxios.length + 1, name: action.payload },
        ],
      };
    case EDIT_USER:
      return {
        ...state,
        name: action.payload.name,
        userId: action.payload.id,
      };
    case UPDATE_USER:
      return {
        withAxios: [
          ...state.withAxios.map((x, i) =>
            x.id != action.payload.id ? x : action.payload
          ),
        ],
        name: "",
        userId: null,
      };
    case DELETE_USER:
      return {
        ...state,
        withAxios: [
          ...state.withAxios.filter((x, i) => x.id != action.payload),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
