import types from './actionTypes';
import axiosInstance from '../services/axiosInstance';

const {
  CREATE_STORY, GET_STORIES, STORE_CREATED_STORY,
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

export {
  createStory,
  getStories,
  storeCreatedStory,
};
