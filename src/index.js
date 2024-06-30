// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; // Importa la configuración de i18next

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
