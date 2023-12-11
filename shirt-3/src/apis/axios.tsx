import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://gin-ec-clothing.onrender.com/api',
  timeout: 2000,
});

instance.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  return config
}, (error) => {
  return Promise.reject(error)
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return error?.response?.data;
  }
);

export default instance;