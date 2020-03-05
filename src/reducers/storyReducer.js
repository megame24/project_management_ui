import types from '../actions/actionTypes';

const {
  CREATE_STORY, RESET, GET_STORIES, STORE_CREATED_STORY,
  UPDATE_STORY_STATUS,
} = types;

export const initialState = {
  isLoading: false,
  errors: {
    statusCode: 0,
    message: '',
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
        },
      };
    case UPDATE_STORY_STATUS:
    {
      const stories = [...state.stories];
      const storyToUpdate = state.stories
        .filter((story) => story.summary === action.payload.summary)[0];
      storyToUpdate.status = action.payload.status;
      return {
        ...state,
        stories,
        success: true,
      };
    }
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
