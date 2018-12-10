import {
    createReducer
} from '../../app/common/util/reducerUtil'
import {
    INCREMENT_CONUTER,
    DECREMENT_CONUTER,
    COUNTER_ACTION_FINISHED,
    COUNTER_ACTION_STARTED
} from "./testConstants";

const initialState = {
    data: 42,
    loading: false
}

export const incrementCounter = (state, payload) => {
    return { ...state,
        data: state.data + 1
    }
}

export const decrementCounter = (state, payload) => {
    return { ...state,
        data: state.data - 1
    }
}

export const counterActionStarted = (state, payload) => {
    return { ...state,
        loading: true
    }
}

export const counterActionFinished = (state, payload) => {
    return { ...state,
        loading: false
    }
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
    [DECREMENT_CONUTER]: decrementCounter,
    [COUNTER_ACTION_STARTED]: counterActionStarted,
    [COUNTER_ACTION_FINISHED]: counterActionFinished
})