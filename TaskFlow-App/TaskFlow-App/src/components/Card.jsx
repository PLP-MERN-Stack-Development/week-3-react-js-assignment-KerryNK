import React from 'react';

const Card = ({ title, content, actions }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{content}</p>
            <div className="mt-4">
                {actions}
            </div>
        </div>
    );
};

export default Card;