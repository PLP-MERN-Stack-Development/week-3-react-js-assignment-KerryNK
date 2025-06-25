import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with the actual API endpoint

export const fetchRandomQuote = async () => {
    try {
        const response = await axios.get(`${API_URL}/quotes/random`);
        return response.data;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        throw error;
    }
};

export const fetchRandomTask = async () => {
    try {
        const response = await axios.get(`${API_URL}/tasks/random`);
        return response.data;
    } catch (error) {
        console.error('Error fetching random task:', error);
        throw error;
    }
};