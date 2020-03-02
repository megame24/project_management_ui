import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import types from './actions/actionTypes';

import App from './App';
import store from './store';

// persist user login
const user = localStorage.getItem('user');
if (user && user !== 'undefined') {
  store.dispatch({ type: types.PERSIST_LOGIN, payload: { data: JSON.parse(user) } });
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
