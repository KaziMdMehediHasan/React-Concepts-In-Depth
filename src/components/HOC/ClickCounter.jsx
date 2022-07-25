import React from 'react';
import withCounter from './withCounter';


const ClickCounter = ({ count, incrementCounter }) => {
    return (
        <>
            <button onClick={() => incrementCounter()}>Click to increase {count}</button>
        </>
    )
}

export default withCounter(ClickCounter);