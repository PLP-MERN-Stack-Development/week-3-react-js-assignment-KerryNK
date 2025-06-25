import React from 'react';

const Button = ({ variant = 'primary', children, onClick, className = '' }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-300 text-black hover:bg-gray-400',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;