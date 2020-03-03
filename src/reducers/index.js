import { combineReducers } from 'redux';
import auth from './loginReducer';
import nav from './navReducer';
import story from './storyReducer';

export default combineReducers({
  auth,
  nav,
  story,
});
