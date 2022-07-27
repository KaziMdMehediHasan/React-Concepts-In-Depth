import React, { Component } from 'react';

class Emoji2 extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render() {
        return (
            <div>
                <h1>{this.props.children({ addEmoji: this.addEmoji })}</h1>
            </div>
        );
    }
}

export default Emoji2;