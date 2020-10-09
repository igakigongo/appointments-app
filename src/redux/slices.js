/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { removeAuthToken, setAuthToken } from '../utils';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    deleteAppointment: (state, action) => {
      for (let i = 0; i < state;) {
        if (state[i].id === action.payload) {
          state.splice(i, 1);
          break;
        }
        i += 1;
      }
    },
    initAppointments: (_, action) => action.payload,
    updateAppointment: (state, action) => {
      for (let i = 0; i < state;) {
        if (state[i].id === action.payload.id) {
          state.splice(i, 1, action.payload);
          break;
        }
        i += 1;
      }
    },
  },
});

export const {
  addAppointment,
  deleteAppointment,
  initAppointments,
  updateAppointment,
} = appointmentsSlice.actions;
export const appointmentsReducer = appointmentsSlice.reducer;

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    data: [],
    fetching: false,
  },
  reducers: {
    fetchingDoctors: (state, action) => {
      state.fetching = action.payload;
    },
    initDoctors: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  fetchingDoctors,
  initDoctors,
} = doctorsSlice.actions;
export const doctorsReducer = doctorsSlice.reducer;

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
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
