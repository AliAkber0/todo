import axios from "axios";
import { ADD, DELETE, EDIT, GET, UPDATE } from "./actionTypes";

export const getUserAsync = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispatch({
          type: GET,
          payload: [...data],
        });
      })
      .catch((err) => console.log("error :: ", err));
  };
};

export const addUserAsync = (payload) => {
  return (dispatch) => {
    if (payload.trim().length > 0) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, {
          name: payload,
        })
        .then((res) => {
          dispatch({
            type: ADD,
            payload,
          });
          alert("User Added successfully .......");
        })
        .catch((err) => console.log("error :: ", err));
    } else if (payload == null) {
      alert("Enter a user");
    } else {
      alert("invalid operation");
    }
  };
};

export const userEdit = (payload) => {
  return {
    type: EDIT,
    payload: payload,
  };
};

export const updateUserAsync = (payload) => {
  return (dispatch) => {
    if (payload.userId && payload.user) {
      axios
        .patch(`https://jsonplaceholder.typicode.com/todos/${payload.userId}`, {
          id: payload.userId,
          name: payload.user,
        })
        .then((res) => {
          dispatch({
            type: UPDATE,
            payload: {
              id: payload.userId,
              name: payload.user,
            },
          });
          alert("updated successfully .......");
        })
        .catch((err) => console.log("error :: ", err));
    }
  };
};

export const deleteUserAsync = (payload) => {
  return (dispatch) => {
    if (payload) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${payload}`)
        .then((res) => {
          alert("deleted successfully .......", res);
          dispatch({
            type: DELETE,
            payload,
          });
        })
        .catch((err) => console.log("error :: ", err));
    }
  };
};
