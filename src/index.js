import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import {getAuthToken} from './utils';
import './index.scss';

const authToken = getAuthToken();
console.log(authToken);
// dispatchEvent()

render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
