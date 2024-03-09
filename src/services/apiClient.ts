import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://185.8.174.74:8000/accounts/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T, id?: string) => {
    return authInstance
      .post<T>(this.endpoint + id, data)
      .then((res) => res.data);
  };
}

export default APIClient;
