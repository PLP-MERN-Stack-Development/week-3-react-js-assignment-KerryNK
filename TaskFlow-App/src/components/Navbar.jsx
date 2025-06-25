import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    TaskFlow
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/tasks" className="text-gray-300 hover:text-white">Tasks</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;