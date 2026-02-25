import axios from "axios";
import { store } from "../store";
import { logout } from "../store/user/userSlice";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

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
