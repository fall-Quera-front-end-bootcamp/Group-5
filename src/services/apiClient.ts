import axios from "axios";
import useAuthStore from "../store";
import { useRefreshUser } from "../hooks/useAuth";

const authInstance = axios.create({
  baseURL: "http://185.8.174.74:8000/",
});

export class AuthAPIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T) => {
    return authInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export const axiosInstance = axios.create({
  baseURL: "http://185.8.174.74:8000/",
  timeout: 3000,
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
  get = (id: string | number) => {
    return axiosInstance.get<T>(this.endpoint + id).then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

axiosInstance.interceptors.request.use(
  (config) => {
    const {
      user: { access },
    } = useAuthStore();
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${access}`;
    return newConfig;
  },
  (error: Error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      user: { refresh, access },
      logout,
    } = useAuthStore();
    const refreshRequest = useRefreshUser();

    const config = error?.config;

    if (error.response.status === 401) {
      try {
        refreshRequest.mutate({ refresh });

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${access}`,
        };

        return axiosInstance(config);
      } catch (e) {
        console.log(refreshRequest.error);
        logout();

        window.location.replace("/");
      }
    }

    return Promise.reject(error);
  }
);
