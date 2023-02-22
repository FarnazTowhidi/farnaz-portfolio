import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
//Styles
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
<link rel="stylesheet" href="https://advanced.team/assets/css/app.fdd9940c946dc15a0bb7.css?d=1" />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <App />
    </Router> 
  </React.StrictMode>
);

reportWebVitals();
