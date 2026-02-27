import axios from "axios";
import { store } from "../store";
import { logout } from "../store/user/userSlice";
const api = axios.create({
  baseURL: "https://admin.sharm-dream.com/api/",
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
