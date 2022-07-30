import React, { useContext } from 'react'
import CounterContext from '../../contexts/counterContext'

const ReducerCounter3 = () => {
    // const { countDispatch } = useContext(CounterContext);
    const counterContext = useContext(CounterContext);
    return (
        <>
            {/* <button onClick={() => countDispatch({ type: 'increment', value: 5 })}>Increase by 5</button>
            <button onClick={() =>countDispatch({ type: 'decrement', value: 5 })}>Decrease by 5</button> */}
            <button onClick={() => counterContext.countDispatch({ type: 'increment', value: 5 })}>Increase by 5</button>
            <button onClick={() => counterContext.countDispatch({ type: 'decrement', value: 5 })}>Decrease by 5</button>

        </>
    )
}

export default ReducerCounter3