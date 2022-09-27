import { type } from "@testing-library/user-event/dist/type";

export const GET_USER_FETCH = "GET_USER_FETCH";
export const GET_USER_SUCCCESS = "GET_USER_SUCCCESS";
export const getUserFetch = () => ({
  type: GET_USER_FETCH,
});
export const getUserSuccess = (users) => ({
  type: GET_USER_SUCCCESS,
  users,
});
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};
export const deleteAllUsers = () => {
  return {
    type: "DELETE_ALL_USERS",
  };
};
export const removeUser = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
