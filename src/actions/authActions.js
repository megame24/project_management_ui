import axiosInstance from '../services/axiosInstance';
import types from './actionTypes';

const { LOGIN, LOGOUT, SIGN_UP } = types;

const login = (formData) => ({
  type: LOGIN,
  payload: axiosInstance().post('/login', formData),
});

const logout = () => ({
  type: LOGOUT,
});

const signUp = (formData) => ({
  type: SIGN_UP,
  payload: axiosInstance().post('/register', formData),
});

export {
  login,
  logout,
  signUp,
};
