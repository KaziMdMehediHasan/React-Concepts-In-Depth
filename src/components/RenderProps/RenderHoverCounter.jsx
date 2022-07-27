import React from 'react';

const RenderHoverCounter = ({ counter, increaseCounter }) => {
    return (
        <div>
            <h1 onMouseOver={increaseCounter}>Hovered {counter} times</h1>
        </div>
    );
}

export default RenderHoverCounter;