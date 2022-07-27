import React from 'react'

const User = ({ render }) => {
    return (
        <h1>{render(false)}</h1>
    )
}

export default User