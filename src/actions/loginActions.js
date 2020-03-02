import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const { LOGIN } = types;

const login = (formData) => {
  let route = '/login';
  if (formData.isAdmin) route = '/admin-login';
  return {
    type: LOGIN,
    payload: axiosInstance().post(route, formData),
  };
};

export {
  login,
};
