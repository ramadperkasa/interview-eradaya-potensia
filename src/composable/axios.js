import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = process.env.VUE_APP_API_TOKEN;

    if (token) {
      config.params = { ...config.params, key: token, expiration: 600 };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
