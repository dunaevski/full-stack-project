import { INCREMENT_CONUTER, DECREMENT_CONUTER} from './testConstants'

export const incrementCounter = () => {
    return {
        type: INCREMENT_CONUTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_CONUTER
    }
}