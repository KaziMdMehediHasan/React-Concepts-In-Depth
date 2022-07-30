import React, { useReducer } from 'react'

const initialState = {
    counter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { counter: state.counter + action.value }

        case 'decrease':
            if (state.counter <= 0) {
                return { counter: 0 }
            } else {
                return { counter: state.counter - action.value }
            }


        default: return state;
    }
}
export const ReducerCounter2 = () => {
    const [counter, dispatch] = useReducer(reducer, initialState);
    const [counter2, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>First Counter : {counter.counter}</h1>
            <button onClick={() => dispatch({ type: 'increase', value: 1 })}>Increase </button>
            <button onClick={() => dispatch({ type: 'decrease', value: 1 })}>Decrease</button>
            <h1>First Counter : {counter2.counter}</h1>
            <button onClick={() => dispatch2({ type: 'increase', value: 5 })}>Increase </button>
            <button onClick={() => dispatch2({ type: 'decrease', value: 5 })}>Decrease</button>
        </div>
    )
}
