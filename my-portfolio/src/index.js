import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'react-dom/client' import for React 18
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
