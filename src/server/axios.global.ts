import axios from "axios";
import { store } from "../store";
import { logout } from "../store/user/userSlice";

axios.defaults.baseURL = "https://admin.sharm-dream.com/api/";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
