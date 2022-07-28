import React from 'react';

const RenderClickCounter = ({ counter, increaseCounter }) => {
    return (
        <div>
            <button onClick={increaseCounter}>Click to Increase {counter}</button>
        </div>
    );
}

export default RenderClickCounter;