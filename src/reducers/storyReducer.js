import types from '../actions/actionTypes';

const {
  CREATE_STORY, RESET, GET_STORIES, STORE_CREATED_STORY,
} = types;


// {
//   createdBy: 2,
//   status: 'approved',
//   summary: '1st story created by 2',
//   description: 'dummy desc',
//   type: 'enhancement',
//   complexity: 'high',
//   estimatedHrs: 1,
//   cost: 100,
// },
// {
//   createdBy: 2,
//   status: 'rejected',
//   summary: '2nd story created by 2',
//   description: 'dummy desc',
//   type: 'enhancement',
//   complexity: 'high',
//   estimatedHrs: 1,
//   cost: 100,
// },
// {
//   createdBy: 3,
//   summary: 'story created by 3',
//   description: 'dummy desc',
//   type: 'enhancement',
//   complexity: 'high',
//   estimatedHrs: 1,
//   cost: 100,
// },


export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
    response: {},
  },
  success: false,
  created: false,
  stories: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${CREATE_STORY}_PENDING`:
    case `${GET_STORIES}_PENDING`:
      return {
        ...state,
        isLoading: true,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
      };
    case `${GET_STORIES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        errors: {
          statusCode: 0,
          message: '',
          response: {},
        },
        stories: action.payload.data,
      };
    case STORE_CREATED_STORY:
      return {
        ...state,
        stories: [
          action.payload,
          ...state.stories],
        success: true,
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
        created: true,
      };
    case `${CREATE_STORY}_REJECTED`:
    case `${GET_STORIES}_REJECTED`:
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
        created: false,
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
