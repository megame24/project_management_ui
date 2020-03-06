import types from '../actions/actionTypes';

const {
  LOGIN, PERSIST_LOGIN, RESET, LOGOUT,
  SIGN_UP,
} = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
  },
  token: '',
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
        },
        token: '',
        role: '',
        user: {},
      };
    case `${LOGIN}_PENDING`:
    case `${SIGN_UP}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errors: {
          statusCode: 0,
          message: '',
        },
      };
    case `${LOGIN}_FULFILLED`:
    case `${SIGN_UP}_FULFILLED`:
    case PERSIST_LOGIN:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
        },
        token: action.payload.data.token,
        role: action.payload.data.user.role,
        user: action.payload.data.user,
      };
    case `${LOGIN}_REJECTED`:
    case `${SIGN_UP}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: action.payload.statusCode,
          message: action.payload.message,
        },
      };
    case RESET:
      return {
        ...state,
        success: false,
        errors: {
          statusCode: 0,
          message: '',
        },
      };
    default:
      return state;
  }
};
