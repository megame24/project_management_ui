import types from './actionTypes';
import axiosInstance from '../services/axiosInstance';

const {
  CREATE_STORY, GET_STORIES, UPDATE_STORY_STATUS,
} = types;

const createStory = (formData) => ({
  type: CREATE_STORY,
  payload: axiosInstance().post('/stories', formData),
});

const getStories = () => ({
  type: GET_STORIES,
  payload: axiosInstance().get('/stories'),
});

const updateStatus = (storyId, status) => ({
  type: UPDATE_STORY_STATUS,
  payload: axiosInstance().put(`/stories/${storyId}/review`, { status }),
});

export {
  createStory,
  getStories,
  updateStatus,
};
