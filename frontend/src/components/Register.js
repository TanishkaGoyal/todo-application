// src/components/Register.js

import React, { useState } from 'react';
import { registerUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };

        try {
            await registerUser(userData);  // Removed unused variable 'data'
            navigate('/login');  // Redirect to login page after successful registration
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
