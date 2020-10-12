import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { appointmentsReducer, doctorsReducer, tokenReducer } from './slices';

const reducer = combineReducers({
  appointments: appointmentsReducer,
  doctors: doctorsReducer,
  token: tokenReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
