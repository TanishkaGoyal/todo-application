import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';  // ✅ Import your custom styles here
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: For performance monitoring
reportWebVitals();
