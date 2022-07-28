import React, { Component } from 'react';
import Content from './Content';

class Section extends Component {
    render() {
        return (
            <div>
                <h1>This is Section</h1>
                <Content />
            </div>
        );
    }
}

export default Section;