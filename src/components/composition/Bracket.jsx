import React, { Component } from 'react';

class Bracket extends Component {
    addBracket = (text) => `[ ${text} ]`;
    render() {
        return (
            <div>
                {this.props.children({ addBracket: this.addBracket })}
            </div>
        );
    }
}

export default Bracket;