import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
                <p className="text-lg text-center mb-8">
                    Your advanced task manager app for tracking tasks efficiently.
                </p>
                <a href="/tasks" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Get Started
                </a>
            </div>
        </Layout>
    );
};

export default Home;