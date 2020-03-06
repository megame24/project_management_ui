import types from '../actions/actionTypes';

const {
  CREATE_STORY, RESET, GET_STORIES, UPDATE_STORY_STATUS,
} = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
  },
  success: false,
  stories: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${CREATE_STORY}_PENDING`:
    case `${GET_STORIES}_PENDING`:
    case `${UPDATE_STORY_STATUS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errors: {
          statusCode: 0,
          message: '',
        },
      };
    case `${GET_STORIES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
        },
        stories: action.payload.data,
      };
    case `${CREATE_STORY}_FULFILLED`:
    case `${UPDATE_STORY_STATUS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
        },
        success: true,
      };
    case `${CREATE_STORY}_REJECTED`:
    case `${GET_STORIES}_REJECTED`:
    case `${UPDATE_STORY_STATUS}_REJECTED`:
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
        isLoading: false,
        success: false,
        created: false,
        errors: {
          statusCode: 0,
          message: '',
        },
      };
    default:
      return state;
  }
};
