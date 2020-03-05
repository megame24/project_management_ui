import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import types from './actions/actionTypes';
import { getStories } from './actions/storyActions';

import App from './App';
import store from './store';

// persist user login
const user = localStorage.getItem('user');
if (user && user !== 'undefined') {
  store.dispatch({ type: types.PERSIST_LOGIN, payload: { data: JSON.parse(user) } });
  /* get stories and store it in the store.
    I am doing this here because the mock api do not persist data.
    In a real app, I'll do this in the viewStories component,
    so it is called on viewStories component mount every time to get the latest stories */
  store.dispatch(getStories());
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
