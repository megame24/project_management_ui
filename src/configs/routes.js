import { Route } from 'react-router-dom';
import Login from '../components/Login';

export default [
  {
    type: Route,
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
