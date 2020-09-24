const TOKEN_KEY = 'TOKEN_KEY';

function createTestLocalStorage() {
  let map = new Map();

  function getItem(key) {
    return map.get(key);
  }

  function removeItem(key) {
    map.delete(key)
  }
  
  function setItem(key, value) {
    map.set(key, value)
  }

  return {
    getItem,
    removeItem,
    setItem
  }
};

export const getStorage = () => process.env.NODE_ENV === 'test' ?
  createTestLocalStorage()
  : window.localStorage;

const storage = getStorage();

export const getAuthToken = () => storage.getItem(TOKEN_KEY);

export const removeAuthToken = () => storage.removeItem(TOKEN_KEY);

export const setAuthToken = (token) => storage.setItem(TOKEN_KEY, token);
