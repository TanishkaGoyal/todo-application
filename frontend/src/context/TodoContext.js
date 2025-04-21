// src/context/TodoContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTasks } from '../utils/api';

// Create the context
const TodoContext = createContext();

// Custom hook for easier usage
export const useTodo = () => useContext(TodoContext);

// Context Provider component
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Load tasks when component mounts if token exists
  useEffect(() => {
    if (token) {
      getTasks(token).then((data) => setTasks(data)).catch((err) => console.error(err));
    }
  }, [token]);

  const value = {
    tasks,
    setTasks,
    token,
    setToken
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
