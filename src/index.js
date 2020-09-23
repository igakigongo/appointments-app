import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { getAuthToken } from './utils';
import store from './redux/store';
import { setToken } from './redux/slices';
import './index.scss';

const authToken = getAuthToken();

if (authToken) {
  store.dispatch(setToken(authToken));
}

render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
