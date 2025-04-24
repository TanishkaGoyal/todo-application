// src/utils/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Update if needed


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Registration failed');
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Login failed');
    }
};

export const getTasks = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/tasks`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Error fetching tasks');
    }
};

export const addTask = async (taskData, token) => {
    try {
        const response = await axios.post(`${API_URL}/tasks`, taskData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Error adding task');
    }
};
