import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './route';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="App">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
  
);

reportWebVitals();
