import { createReducer } from '../../app/common/util/reducerUtil'
import { INCREMENT_CONUTER, DECREMENT_CONUTER } from "./testConstants";

const initialState = {
    data: 42
}

export const incrementCounter = (state, payload) => {
    return {...state, data: state.data +1}
}

export const decrementCounter = (state, payload) => {
    return {...state, data: state.data -1}
}

// const testReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case INCREMENT_CONUTER:
//             return {...state, data: state.data +1}
//         case DECREMENT_CONUTER:
//             return {...state, data: state.data -1}
//         default:
//             return state
//     }
// }

 
// export default testReducer

export default createReducer(initialState, {
    [INCREMENT_CONUTER]: incrementCounter,
    [DECREMENT_CONUTER]: decrementCounter
})