import { GET_TODOS, SET_TODO } from "../Action/Action";
const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      const { todoList } = action;
      return { ...state, todoList };
    case GET_TODOS:
      return state;
  }
};

export default todoReducer;
