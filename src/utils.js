import { compareAsc, parseISO } from 'date-fns';

export const DURATION_TYPE = {
  LONG: 'LONG',
  SHORT: 'SHORT',
};
const STANDARD_TIME_SLOTS = [];
const TOKEN_KEY = 'TOKEN_KEY';

function createTestLocalStorage() {
  const map = new Map();

  function getItem(key) {
    return map.get(key);
  }

  function removeItem(key) {
    map.delete(key);
  }

  function setItem(key, value) {
    map.set(key, value);
  }

  return {
    getItem,
    removeItem,
    setItem,
  };
}

export const getStorage = () => (process.env.NODE_ENV === 'test'
  ? createTestLocalStorage()
  : window.localStorage);

const storage = getStorage();

export const getAuthToken = () => storage.getItem(TOKEN_KEY);

export const removeAuthToken = () => storage.removeItem(TOKEN_KEY);

export const setAuthToken = token => storage.setItem(TOKEN_KEY, token);

const format = number => (number).toLocaleString('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

export const getEndTime = (startTime, durationType = DURATION_TYPE.SHORT) => {
  const [hour, minutes] = startTime.split(':').map(x => parseInt(x, 10));

  switch (durationType) {
    case DURATION_TYPE.LONG: {
      return `${format(hour + 1)}:${format(minutes)}`;
    }

    default: {
      const newHour = minutes === 30 ? hour + 1 : hour;
      const newMinutes = minutes === 30 ? 0 : 30;
      return `${format(newHour)}:${format(newMinutes)}`;
    }
  }
};

export const parseAndCompareDateAsc = (a, b) => {
  const [first, second] = [a.start_date, b.start_date].map(parseISO);
  return compareAsc(first, second);
};

export const sortAppointmentsByDateAsc = appointments => {
  const array = [...appointments];
  return array.sort(parseAndCompareDateAsc);
};

export const standardTimeSlots = () => {
  if (STANDARD_TIME_SLOTS.length > 0) return STANDARD_TIME_SLOTS;

  const slots = [];
  for (let i = 8; i < 19;) {
    if (i !== 13) {
      slots.push(`${format(i)}:00`, `${format(i)}:30`);
    }
    i += 1;
  }

  STANDARD_TIME_SLOTS.push(...slots);
  return STANDARD_TIME_SLOTS;
};
