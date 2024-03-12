import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://185.8.174.74:8000/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T) => {
    return authInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
