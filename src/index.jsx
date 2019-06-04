// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers

const initialState = {
  messages: [],
  channels: [ 'General', 'React', 'Paris' ],
  currentUser: prompt('what is your username?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'General'
};

const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
