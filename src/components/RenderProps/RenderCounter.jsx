import React, { Component } from 'react';

class RenderCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increaseCounter = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

    render() {
        return (
            <div>
                {
                    this.props.children({ counter: this.state.counter, increaseCounter: this.increaseCounter })
                }
            </div>
        );
    }
}

export default RenderCounter;