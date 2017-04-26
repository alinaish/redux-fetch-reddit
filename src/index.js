import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPostsIfNeeded } from './actions/actions';
import rootReducer from './reducers/reducers'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const loggerMiddlware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddlware
  )
);



store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  console.log(store.getState());
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
