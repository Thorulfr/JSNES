// Imports
import React, { Component } from 'react';

class TVScreen extends Component {
    // Render canvas at standard NES resolution
    render() {
        return (
            <canvas
                id="emulator-canvas"
                width={256}
                height={240}
                // Allow access to canvas outside of standard render flow
                ref={(canvas) => {
                    this.canvas = canvas;
                }}
            ></canvas>
        );
    }

    // Initialize canvas
    initializeCanvas() {
        // Set canvas drawing method as 2D
        this.context = this.canvas.getContext('2d');
        // Set canvas imageDate to entire canvas
        this.imageData = this.context.getImageData(0, 0, 256, 240);
        // Set canvas to entirely black when filled
        this.context.fillStyle = 'black';
        // Fill entire canvas with fillStyle, aka black
        this.context.fillRect(0, 0, 256, 240);
    }

    // Initialize canvas any time its component is mounted or updated
    // TO-DO: Convert to functional rather than class component w/ useEffect()
    componentDidMount() {
        this.initializeCanvas();
        console.log('Mounted');
    }
    componentDidUpdate() {
        this.initializeCanvas();
        console.log('Updated');
    }
}

export default TVScreen;
