import {
  GET_TODOS,
  SET_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
} from "../Action/Action";
const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      const { todoList } = action;
      return { ...state, todoList };

    case GET_TODOS:
      return state;

    case DELETE_TODO: {
      const { id } = action;
      const newTodoList = state.todoList?.filter((_, index) => index !== id);
      return { ...state, todoList: newTodoList };
    }

    case DELETE_ALL_TODOS:
      return { ...state, todoList: [] };

    case UPDATE_TODO: {
      const { id, newTodo } = action;
      const newTodoList = state.todoList.map((todo, index) => {
        if (index === id) {
          return newTodo;
        }
        return todo;
      });
    }
  }
};

export default todoReducer;
