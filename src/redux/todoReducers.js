import { GET, EDIT, ADD, UPDATE, DELETE, DELETALL } from "./actionTypes";
const initailState = {
  edit: false,
  value: "",
  currentId: null,
  list: [],
};

const reducer = (state = initailState, action) => {
  console.log("action : ", action);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: "",
        list: [action.payload, ...state?.list],
      };
    case EDIT:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE:
      return {
        value: "",
        currentId: null,
        list: [
          action.payload.value,
          ...state.list.filter((x, i) => i != action.payload.currentId),
        ],
      };
    case DELETE:
      return {
        list: [...state?.list.filter((x, i) => i != action.currentId)]
      };
    case DELETALL:
      return {
        ...initailState,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
