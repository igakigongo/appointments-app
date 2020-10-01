import { getAuthToken } from '../utils';
import { initAppointments } from './slices';

const API_URL = process.env.REACT_APP_APPOINTMENTS_API_URL;
const REQUEST_METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const makeHttpRequest = (url, options = {}) => {
  const token = getAuthToken();
  const { body, contentType, method } = options;
  return fetch(url, {
    body: body ? JSON.stringify(body) : null,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      'Content-Type': contentType || 'application/json;charset=UTF-8',
    },
    method: method || REQUEST_METHOD.GET,
  });
};

export const createAppointment = appointment => () => makeHttpRequest(`${API_URL}/appointments`,
  {
    body: appointment,
    method: REQUEST_METHOD.POST,
  }).then(response => response.json());

export const fetchAppointments = () => dispatch => makeHttpRequest(`${API_URL}/appointments`)
  .then(response => response.json())
  .then(appointments => dispatch(initAppointments(appointments)));

export const signIn = credentials => () => makeHttpRequest(`${API_URL}/auth/login`,
  {
    body: credentials,
    method: REQUEST_METHOD.POST,
  });

export const signUp = userInfo => () => makeHttpRequest(`${API_URL}/signup`,
  {
    body: userInfo,
    method: REQUEST_METHOD.POST,
  });
