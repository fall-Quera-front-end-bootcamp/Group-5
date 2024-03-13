import axios from "axios";
import { RefreshTokenData } from "../entities/Auth";

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

const axiosInstance = axios.create({
  baseURL: "http://185.8.174.74:8000/",
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  get = (id: string) => {
    return axiosInstance
      .get<T>(this.endpoint + id + "/")
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

const refreshApiClient = new AuthAPIClient<RefreshTokenData>(
  "accounts/refresh/"
);

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user")!);
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${user.access}`;
    return newConfig;
  },
  (error: Error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const user = JSON.parse(localStorage.getItem("user")!);

    const config = error?.config;

    if (error.response.status === 401) {
      try {
        const refreshResponseData = await refreshApiClient.post({
          refresh: user.refresh,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, access: refreshResponseData.access })
        );
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${refreshResponseData.access}`,
        };

        return axiosInstance(config);
      } catch (e) {
        localStorage.removeItem("user");

        window.location.replace("/auth/login");
      }
    }

    return Promise.reject(error);
  }
);
