// Imports
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <main className="h-full flex flex-col justify-center items-center bg-black text-white">
            {/* Header */}
            <header className="flex flex-col items-center py-12 w-full">
                <p className="text-3xl">Welcome!</p>
                <p className="text-xl pt-4">
                    Click{' '}
                    <Link to="/emulator/croom">
                        <span className="hover:text-red-600">here</span>
                    </Link>{' '}
                    to start.
                </p>
            </header>
        </main>
    );
}

export default Landing;
