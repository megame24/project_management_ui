/*
  eslint consistent-return: 0
  no-param-reassign: 0
*/
import types from '../actions/actionTypes';

/**
 * authentication middleware that parses responses
 * and stores user data on success
 * @returns {Function} next
 */
const authMiddleware = () => (next) => (action) => {
  if (!action) return;
  if (action.type === `${types.LOGIN}_FULFILLED` || action.type === `${types.SIGN_UP}_FULFILLED`) {
    const { data } = action.payload;
    localStorage.setItem('data', JSON.stringify(data));
  }
  if (action.type === types.LOGOUT) {
    localStorage.removeItem('data');
  }
  return next(action);
};

export default authMiddleware;
