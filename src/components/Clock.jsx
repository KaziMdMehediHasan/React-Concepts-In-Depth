import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    // update the state every 1second after the component is rendered to the DOM
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

    // interval will be cleared just before the component is about to unmount
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1>
                    {date.toLocaleTimeString(this.props.locale)}
                </h1>
            </div>
        )
    }
}
