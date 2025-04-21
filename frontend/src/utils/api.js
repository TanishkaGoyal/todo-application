import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change if different

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err.response ? err.response.data : new Error('Registration failed');
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err.response ? err.response.data : new Error('Login failed');
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

// Add the updateTask function here
export const updateTask = async (taskId, completed, token) => {
    try {
        const response = await axios.put(`${API_URL}/tasks/${taskId}`, { completed }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Error updating task');
    }
};

// Add the deleteTask function here
export const deleteTask = async (taskId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error('Error deleting task');
    }
};
