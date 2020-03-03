import types from '../actions/actionTypes';

const { ACTIVE_ROUTE, TOGGLE_SIDE_NAV } = types;

export const initialState = {
  activeRoute: '',
  sideNavStatus: 'show',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIVE_ROUTE:
      return {
        ...state,
        activeRoute: action.payload,
      };
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        sideNavStatus: action.payload,
      };
    default:
      return state;
  }
};
