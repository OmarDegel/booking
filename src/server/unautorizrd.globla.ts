import axios from "axios";
import { clearAuth } from "../util/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAuth();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
