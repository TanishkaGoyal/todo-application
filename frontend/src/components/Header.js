// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>📝 To-Do App</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/clock">Clock</Link></li>
          <li><Link to="/alarm">Alarm</Link></li>
          <li><Link to="/notepad">Notepad</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
