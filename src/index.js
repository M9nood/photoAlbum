import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk,promiseMiddleware()))

ReactDOM.render(
  <Provider store={store}>
  <Router
  history={browserHistory}
  routes={routes}
  />
  </ Provider> 
  , document.getElementById('root')
  );
  registerServiceWorker();
