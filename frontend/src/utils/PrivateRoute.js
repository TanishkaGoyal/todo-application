// src/utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate instead of Redirect

// PrivateRoute checks if the user is authenticated
const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if the token exists

    return isAuthenticated ? children : <Navigate to="/login" />;  // Use Navigate for redirection
};

export default PrivateRoute;
