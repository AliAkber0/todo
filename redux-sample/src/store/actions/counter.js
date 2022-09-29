import {INCREMENT,DECREMENT, RANDOM} from "../types"

export const increment = (data,id ,x) => ({
    type: INCREMENT,
    payload:{
        data,
        id:7,
        x
    }
});

export const decrement = (data) => ({
    type: DECREMENT,
    payload: data
});

export const random = () => ({
    type: RANDOM,
    payload: 3
});