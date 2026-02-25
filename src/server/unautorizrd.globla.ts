import axios from "axios";
import { store } from "../store";
import { logout } from "../store/user/userSlice";
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
      store.dispatch(logout());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
