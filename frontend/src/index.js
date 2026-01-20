import React from 'react';
import ReactDOM from 'react-dom/client';
// Notice the .js extension below - this is required for "type": "module"
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
