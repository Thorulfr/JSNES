// Imports
import React, { Component } from 'react';
import TVScreen from '../TVScreen';
import { NES, Controller } from 'jsnes';

// Set which keyboard keys correspond to gamepad keys
let controllerKeys = {
    88: [1, Controller.BUTTON_A, 'X'], // X
    90: [1, Controller.BUTTON_B, 'Z'], // Z
    16: [1, Controller.BUTTON_SELECT, 'Shift'], // Shift
    13: [1, Controller.BUTTON_START, 'Enter'], // Enter
    38: [1, Controller.BUTTON_UP, 'Up'], // Up
    40: [1, Controller.BUTTON_DOWN, 'Down'], // Down
    37: [1, Controller.BUTTON_LEFT, 'Left'], // Left
    39: [1, Controller.BUTTON_RIGHT, 'Right'], // Right
};

class GamePad {
    // Initialize button down/up to class
    constructor(options) {
        this.onButtonDown = options.onButtonDown;
        this.onButtonUp = options.onButtonUp;
    }

    // Prevent default keyboard behavior
    handleKeyPress = (e) => {
        e.preventDefault();
    };

    // Identify keycode of pressed keyboard key, feed to controller's onButtonDown
    handleKeyDown = (e) => {
        var key = this.keys[e.keyCode];
        if (key) {
            this.onButtonDown(key[0], key[1]);
            e.preventDefault();
        }
    };

    // Identify keycode of (de)pressed keyboard key, feed to controller's onButtonUp
    handleKeyUp = (e) => {
        var key = this.keys[e.keyCode];
        if (key) {
            this.onButtonUp(key[0], key[1]);
            e.preventDefault();
        }
    };
}

class JSNES extends Component {
    componentDidMount() {
        // On mounting, create new JSNES instance
        this.nes = new NES({});

        // Use GamePad class to initialize keyboard as controller
        this.keyboardController = new GamePad({
            onButtonDown: this.nes.buttonDown,
            onButtonUp: this.nes.buttonUp,
        });

        // Add event listeners to keyboard
        document.addEventListener(
            'keydown',
            this.keyboardController.handleKeyDown
        );
        document.addEventListener('keyup', this.keyboardController.handleKeyUp);
        document.addEventListener(
            'keypress',
            this.keyboardController.handleKeyPress
        );
    }

    render() {
        return <TVScreen></TVScreen>;
    }
}

export default JSNES;
