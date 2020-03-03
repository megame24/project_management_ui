import { Route } from 'react-router-dom';
import Login from '../components/Login';
import CreateStory from '../components/CreateStory';
import routes from '../components/routes';

const { GuestRoute, UserRoute } = routes;

export default [
  {
    type: GuestRoute,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/createStory',
    component: CreateStory,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: Login,
    exact: false,
  },
];
