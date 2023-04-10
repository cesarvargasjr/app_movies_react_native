import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(
  function (req) {
    req.params = { ...req.params, api_key: process.env.API_KEY }
    return req;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export default api;
