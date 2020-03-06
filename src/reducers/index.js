import { combineReducers } from 'redux';
import auth from './authReducer';
import nav from './navReducer';
import story from './storyReducer';

export default combineReducers({
  auth,
  nav,
  story,
});
