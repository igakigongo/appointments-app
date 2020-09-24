const { getStorage } = require("./utils");

describe('local storage', () => {
  let localStorage;

  beforeAll(() => {
    localStorage = getStorage();
  });

  it('sets an item', () => {
    const key = 'KEY';
    localStorage.setItem(key, 34);
    expect(localStorage.getItem(key)).toEqual(34);
  });

  it('removes an item', () => {
    const KEY = 'KEY';
    localStorage.setItem(KEY, 34);

    localStorage.removeItem(KEY);
    expect(localStorage.getItem(KEY)).toBeUndefined();
  });
});