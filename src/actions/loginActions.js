import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const { LOGIN, LOGOUT } = types;

const login = (formData) => {
  let route = '/login';
  if (formData.isAdmin) route = '/admin-login';
  return {
    type: LOGIN,
    payload: axiosInstance().post(route, formData),
  };
};

const logout = () => ({
  type: LOGOUT,
});

export {
  login,
  logout,
};
