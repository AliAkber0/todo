import {INCREMENT,DECREMENT, RANDOM} from "../types"

export default function counterReducer(state = { count: 0,id:5 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count : state.count + 1 };
        case DECREMENT: {
            return { ...state, count : state.count - 1 };
        }
        case RANDOM:
            return { ...state , count : state.count + action.payload}
        default: {
            return state;
        }
    }
}