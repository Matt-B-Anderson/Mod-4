import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThingProvider from './ThingProvider'

ReactDOM.render(
  <ThingProvider>
    <App />
  </ThingProvider>,
  document.getElementById('root'))



