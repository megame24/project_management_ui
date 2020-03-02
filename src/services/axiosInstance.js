import axios from 'axios';

/**
 * Creates an axios instance
 * @returns {Object} an instance of axios
 */
const axiosInstance = () => {
  let token = '';
  if (localStorage.getItem('token')) {
    token = localStorage.getItem('token');
  }
  const instanceCreate = axios
    .create({
      baseURL: process.env.API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  return instanceCreate;
};

export default axiosInstance;
