import React, { useReducer } from 'react'

const initialState = {
    counter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { counter: state.counter + 1 }

        case 'decrease':
            if (state.counter <= 0) {
                return { counter: 0 }
            } else {

                return { counter: state.counter - 1 }
            }

        default: return state;
    }
}
export const ReducerCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Counter {state.counter}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase </button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
        </div>
    )
}
