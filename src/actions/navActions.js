import types from './actionTypes';

const { ACTIVE_ROUTE, TOGGLE_SIDE_NAV } = types;

const activeRoute = (route) => ({
  type: ACTIVE_ROUTE,
  payload: route,
});

const toggleSideNav = (status) => ({
  type: TOGGLE_SIDE_NAV,
  payload: status,
});

export {
  activeRoute,
  toggleSideNav,
};
