import axios from "axios";
import { ENVCONFIG } from './config/envConfig.js'
const api = axios.create({
  baseURL: ENVCONFIG.ENV,
  timeout: 10000,

});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);




export default api;
