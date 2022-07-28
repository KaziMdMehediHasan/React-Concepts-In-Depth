import React from 'react';

const RenderHoverCounter = ({ counter, increaseCounter, theme }) => {
    const style = theme === "dark" ? { backgroundColor: '#000', color: "#fff" } : null;
    console.log(style);
    return (
        <div>
            <h1 style={style} onMouseOver={increaseCounter}>Hovered {counter} times</h1>
        </div>
    );
}

export default RenderHoverCounter;