import { ADD, DELETE, EDIT, GET, UPDATE } from "./actionTypes";

const initailState = {
  name: "",
  userId: null,
  withAxios: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        withAxios: [...action.payload],
      };
    case ADD:
      return {
        ...state,
        withAxios: [
          ...state.withAxios,
          { id: state.withAxios.length + 1, name: action.payload },
        ],
      };
    case EDIT:
      return {
        ...state,
        name: action.payload.name,
        userId: action.payload.id,
      };
    case UPDATE:
      return {
        withAxios: [
          ...state.withAxios.map((x, i) =>
            x.id != action.payload.id ? x : action.payload
          ),
        ],
        name: "",
        userId: null,
      };
    case DELETE:
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
