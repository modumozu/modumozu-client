import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

instance.interceptors.request.use(
  (instance) => {
    return instance;
  },
  (error) => {
    throw new Error(error);
  },
);
instance.interceptors.response.use(
  (instance) => {
    return instance;
  },
  (error) => {
    throw new Error(error);
  },
);

export default instance;
