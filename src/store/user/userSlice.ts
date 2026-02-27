import { createSlice } from "@reduxjs/toolkit";
import actChangeLang from "./act/actChangeLang";
import type { TLoading } from "../../types/TLoading.type";

interface AuthState {
  user: any | null;
  token: string | null;
  error: null | string;

  loading: TLoading;
}
const intaitialState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: "idle",
};
const userSlice = createSlice({
  name: "user",
  initialState: intaitialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    update: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actChangeLang.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actChangeLang.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const lang = action.meta.arg;
      state.user.lang = lang;
    });
    builder.addCase(actChangeLang.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { setAuth, logout, update, setUser } = userSlice.actions;
export default userSlice.reducer;
