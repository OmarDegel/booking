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
    } else if (error.response?.status === 403) {
      window.location.replace(
        `/403?message=${encodeURIComponent(error.response.data.message)}`,
      );
    }
    return Promise.reject(error);
  },
);
