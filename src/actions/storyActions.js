import types from './actionTypes';
import axiosInstance from '../services/axiosInstance';

const {
  CREATE_STORY, GET_STORIES, STORE_CREATED_STORY,
  UPDATE_STORY_STATUS,
} = types;

const createStory = (formData) => ({
  type: CREATE_STORY,
  payload: axiosInstance().post('/createStory', formData),
});

const getStories = () => ({
  type: GET_STORIES,
  payload: axiosInstance().get('/getStories'),
});

const storeCreatedStory = (formData) => ({
  type: STORE_CREATED_STORY,
  payload: formData,
});

const updateStatus = (story) => ({
  type: UPDATE_STORY_STATUS,
  payload: story,
});

export {
  createStory,
  getStories,
  storeCreatedStory,
  updateStatus,
};
