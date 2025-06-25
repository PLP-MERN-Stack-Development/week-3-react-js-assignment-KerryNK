import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ links, branding }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">{branding}</div>
                <div className="space-x-4">
                    {links.map((link, index) => (
                        <Link key={index} to={link.path} className="text-gray-300 hover:text-white">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;