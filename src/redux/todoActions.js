import { GET, ADD, EDIT, UPDATE, DELETE, DELETALL } from "./actionTypes";

export const addTodo = (payload) => {
    return {
        type: ADD,
        payload
    }
}

export const editTodo = (payload) => {
    return {
        type: EDIT,
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: UPDATE,
        payload
    }
}