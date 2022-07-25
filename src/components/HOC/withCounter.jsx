import React, { Component } from 'react'

const withCounter = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        incrementCounter = () => {
            this.setState((state) => ({ count: state.count + 1 }));
            console.log('clicked');
        };
        render() {
            return (
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} />
            )
        }
    }
    return NewComponent;
}

export default withCounter;
