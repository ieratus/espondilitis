import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
