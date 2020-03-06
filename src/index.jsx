import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import types from './actions/actionTypes';
import { logout } from './actions/authActions';

import App from './App';
import store from './store';

// persist user login
let data = localStorage.getItem('data');
// check if token has expired
if (data && data !== 'undefined') {
  data = JSON.parse(data);
  if (new Date(data.exp).getTime() > new Date().getTime()) {
    store.dispatch({ type: types.PERSIST_LOGIN, payload: { data } });
  } else {
    // logout if token has expired
    store.dispatch(logout());
  }
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
