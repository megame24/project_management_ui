import types from './actionTypes';
import axiosInstance from '../services/axiosInstance';

const { CREATE_STORY, RESET_CREATE_STORY_SUCCESS } = types;

const createStory = (formData) => ({
  type: CREATE_STORY,
  payload: axiosInstance().post('/createStory', formData),
});

const resetCreateStorySuccess = () => ({
  type: RESET_CREATE_STORY_SUCCESS,
});

export {
  createStory,
  resetCreateStorySuccess,
};
