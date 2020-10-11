import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import App from './components/App';
import { getAuthToken } from './utils';
import store from './redux/store';
import { setToken } from './redux/slices';
import './index.scss';
import { fetchDoctors } from './redux/async-actions';

const authToken = getAuthToken();

if (authToken) {
  store.dispatch(setToken(authToken));
  store.dispatch(fetchDoctors());
}

render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ToastProvider autoDismiss>
          <App />
        </ToastProvider>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
