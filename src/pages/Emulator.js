// Imports
import React from 'react';
import JSNES from '../components/JSNES';

function App() {
    return (
        <main className="h-full flex flex-col items-center bg-black text-white">
            {/* Emulator container */}
            <div className="grow">
                <JSNES />
            </div>
            {/* Image container */}
            <div className="flex flex-col items-center h-1/3 w-full py-10">
                <img
                    src="../assets/images/nes-controller.png"
                    alt="NES controller"
                    className="h-1/2"
                    // NES Controller photo by Tomasz Filipek via Pexels (https://www.pexels.com/photo/low-light-photo-of-nes-controller-1637436/)
                ></img>
                {/* Controls */}
                <div className="flex justify-center w-full">
                    <div className="px-6">
                        <p>Up - Up Arrow</p>
                        <p>Down - Down Arrow</p>
                        <p>Left - Left Arrow</p>
                        <p>Right - Right Arrow</p>
                    </div>
                    <div className="px-6">
                        <p>B - Z</p>
                        <p>A - X</p>
                        <p>Start - Enter</p>
                        <p>Select - Shift</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
