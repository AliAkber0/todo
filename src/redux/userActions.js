import { ADD, DELETE, EDIT, GET, GET_USER, UPDATE } from "./actionTypes";

export const getUser = () => ({ type: GET });

export const addUser = (payload) => ({ type: ADD, payload });

export const userEdit = (payload) => ({ type: EDIT, payload: payload });

export const updateUser = (payload) => ({
  type: UPDATE,
  payload: {
    id: payload.userId,
    name: payload.user,
  },
});

export const deleteUser = (payload) => ({ type: DELETE, payload });
