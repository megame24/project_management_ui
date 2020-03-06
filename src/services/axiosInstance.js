import axios from 'axios';

/**
 * Creates an axios instance
 * @returns {Object} an instance of axios
 */
const axiosInstance = () => {
  let token = '';
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));
    token = data.token;
  }
  const instanceCreate = axios
    .create({
      baseURL: process.env.API_URL || 'https://test-proj-m-api.herokuapp.com/api',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
  return instanceCreate;
};

export default axiosInstance;
