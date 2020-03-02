import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import routes from '../components/routes';

const { GuestRoute } = routes;

export default [
  {
    type: Route,
    path: '/',
    component: () => (<div>hello</div>),
    exact: true,
  },
  {
    type: GuestRoute,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: Login,
    exact: false,
  },
];
