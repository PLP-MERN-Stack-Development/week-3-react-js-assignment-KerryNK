import React from 'react';

const Card = ({ title, content, className }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 ${className}`}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
    );
};

export default Card;