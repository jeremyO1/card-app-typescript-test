import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './utilities/themeContext';
import './App.css';
import './index.css'; // Ensure you import your global styles

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

