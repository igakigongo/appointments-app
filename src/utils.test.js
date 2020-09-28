import { DURATION_TYPE, getEndTime, getStorage } from './utils';

describe('utils', () => {
  describe('getEndTime', () => {
    test('returns the time for a long duration', () => {
      const startTime = '08:00';
      const endTime = getEndTime(startTime, DURATION_TYPE.LONG);
      expect(endTime).toEqual('09:00');
    });
    
    test('returns the time for a short duration', () => {
      const startTime = '08:00';
      const endTime = getEndTime(startTime);
      expect(endTime).toEqual('08:30');
    });
  });

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
});
