import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeContextProvider } from './components/ThemeProvider';

ReactDOM.render(
  <ThemeContextProvider>
    <Router>
      <App />
    </Router>
  </ThemeContextProvider>,
  document.getElementById("root")
)