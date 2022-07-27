import React from 'react'

const Text2 = ({ addEmoji, addBracket }) => {
    let text = 'I love JavaScript';
    if (addEmoji) text = addEmoji(text, "<3");
    if (addBracket) text = addBracket(text);
    return (
        <div>{text}</div>
    )
}

export default Text2