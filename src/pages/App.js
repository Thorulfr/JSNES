// Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Emulator from './Emulator';

function App() {
    return (
        <Router>
            <main className="h-full flex flex-col justify-center items-center bg-black text-white">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/emulator/croom" element={<Emulator />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
