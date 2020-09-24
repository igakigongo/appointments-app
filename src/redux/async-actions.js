import { getAuthToken } from "../utils";

const API_URL = process.env.REACT_APP_APPOINTMENTS_API_URL;

const makeHttpRequest = (url, options = {}) => {
  const token = getAuthToken();
  const { body, contentType, method } = options;
  return fetch(url, {
    body: body,
    headers: {
      'Content-Type': contentType || 'application/json;charset=UTF-8',
    },
    method: method || 'GET'
  })
};

export const signIn = (credentials) => () => makeHttpRequest(`${API_URL}/auth/login`,
  {
    body: JSON.stringify(credentials),
    method: 'POST'
  });

export const signUp = (userInfo) => () => makeHttpRequest(`${API_URL}/signup`,
  {
    body: JSON.stringify(userInfo),
    method: 'POST'
  });