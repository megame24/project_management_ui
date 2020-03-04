import types from '../actions/actionTypes';

const {
  LOGIN, PERSIST_LOGIN, RESET, LOGOUT,
} = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  role: '',
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
        role: '',
        user: {},
      };
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
      };
    case `${LOGIN}_FULFILLED`:
    case PERSIST_LOGIN:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
        role: action.payload.data.userRoles[0],
        user: action.payload.data,
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: action.payload.statusCode,
          message: action.payload.message,
          response: action.payload.response,
        },
      };
    case RESET:
      return {
        ...state,
        success: false,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
      };
    default:
      return state;
  }
};
