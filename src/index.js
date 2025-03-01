import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Yeh add karna zaroori hai
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/foodsystem"> {/* Yeh add karo */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
