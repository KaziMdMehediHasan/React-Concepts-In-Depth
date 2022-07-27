import React, { Component } from 'react'

class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render(providedText) {
        let text = 'I love JavaScript'
        if (providedText) text = providedText;
        return (
            <h1>{text}</h1>
        )
    }
}

export default Emoji;
