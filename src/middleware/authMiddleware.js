/*
  eslint consistent-return: 0
  no-param-reassign: 0
*/
import types from '../actions/actionTypes';

/**
 * authentication middleware that parses responses
 * and stores the user on success
 * @returns {Function} next
 */
const authMiddleware = () => (next) => (action) => {
  if (!action) return;
  if (action.type === `${types.LOGIN}_FULFILLED`) {
    const user = action.payload.data;
    localStorage.setItem('user', JSON.stringify(user));
  }
  if (action.type === types.LOGOUT) {
    localStorage.removeItem('user');
  }
  return next(action);
};

export default authMiddleware;
