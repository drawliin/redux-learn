import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementAction, incrementAction, incrementByValueAction } from '../redux/actions/counterActions';
import { INC_BY_VALUE } from '../redux/actions/types';

export default function Counter() {
    
    const countState = useSelector(state => state.count);
    const dispatch = useDispatch();



    const handleIncrement = () => {
        //setCount(count + 1);

        dispatch(incrementAction());
    }

    const handleDecrement = () => {
        //setCount(count - 1);
        dispatch(decrementAction());
    }

    const handleIncByValue = (vl) => {
        dispatch({
            type: INC_BY_VALUE,
            payload: vl
        })
    }

    

    return (
        <div>
            <p>{countState}</p>
            <button onClick = {handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
            <button onClick = {() => handleIncByValue(3)}>Increment By Value</button>
        </div>
    )
}
