import types from '../actions/actionTypes';

const { CREATE_STORY, RESET_CREATE_STORY_SUCCESS } = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${CREATE_STORY}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
      };
    case `${CREATE_STORY}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
        success: true,
      };
    case `${CREATE_STORY}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: action.payload.statusCode,
          message: action.payload.message,
          response: action.payload.response,
        },
      };
    case RESET_CREATE_STORY_SUCCESS:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};
