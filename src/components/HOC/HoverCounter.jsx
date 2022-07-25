import React from 'react'
import withCounter from './withCounter';

export const HoverCounter = ({ count, incrementCounter }) => {
    return (
        <h1 onMouseOver={() => incrementCounter()}>
            Hovered {count} times
        </h1>
    )
}
