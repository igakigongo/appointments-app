import { getAuthToken } from "../utils";

const API_URL = process.env.REACT_APP_APPOINTMENTS_API_URL;

const makeHttpRequest = (url, options = {}) => {
  const token = getAuthToken();
  const { body, contentType, method } = options;
  return fetch(url, {
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Authorization': token ? `Bearer ${token}` : null,
      'Content-Type': contentType || 'application/json;charset=UTF-8',
    },
    method: method || 'GET'
  })
};

export const signIn = (credentials) => () => makeHttpRequest(`${API_URL}/auth/login`,
  {
    body: credentials,
    method: 'POST'
  });

export const signUp = (userInfo) => () => makeHttpRequest(`${API_URL}/signup`,
  {
    body: userInfo,
    method: 'POST'
  });