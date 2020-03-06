import Login from '../components/Login';
import CreateStory from '../components/CreateStory';
import ViewStories from '../components/ViewStories';
import ReviewStory from '../components/ReviewStory';
import Signup from '../components/Signup';
import routes from '../components/routes';

const { GuestRoute, UserRoute } = routes;

export default [
  {
    type: GuestRoute,
    path: '/signUp',
    component: Signup,
    exact: true,
  },
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
    type: UserRoute,
    path: '/viewStories',
    component: ViewStories,
    exact: true,
  },
  {
    type: UserRoute,
    path: '/reviewStory',
    component: ReviewStory,
    exact: true,
  },
  {
    type: GuestRoute,
    path: '*',
    component: Login,
    exact: false,
  },
];
