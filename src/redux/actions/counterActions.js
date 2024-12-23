import { DECREMENT, INC_BY_VALUE, INCREMENT } from "./types"

export const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT
    }
} 

export const incrementByValueAction = () => {
    return {
        type: INC_BY_VALUE
    }
}