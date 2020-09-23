import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import {getAuthToken} from './utils';
import './index.scss';
import store from './redux/store';
import { setToken } from './redux/slices';

const authToken = getAuthToken();

if (authToken){
  store.dispatch(setToken(authToken));
}

render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
