// Imports
import React, { Component } from 'react';
import TVScreen from '../TVScreen';
import { NES } from 'jsnes';

class JSNES extends Component {
    render() {
        return (
            <div>
                <TVScreen></TVScreen>
                <p>Hello World</p>
            </div>
        );
    }
}

export default JSNES;
