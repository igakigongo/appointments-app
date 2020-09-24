import { createSlice } from '@reduxjs/toolkit';
import { removeAuthToken, setAuthToken } from '../utils';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    initAppointments: (state, action) => {

    },
    addAppointment: (state, action) => {

    },
    deleteAppointment: (state, action) => {

    },
    updateAppointment: (state, action) => {

    }
  }
});

export const appointmentsReducer = appointmentsSlice.reducer;

const tokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setToken(_, action) {
      setAuthToken(action.payload);
      return action.payload;
    },
    removeToken() {
      removeAuthToken();
      return null;
    }
  }
});

export const { setToken, removeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
