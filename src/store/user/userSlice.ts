import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
}
const intaitialState: AuthState = {
  user: null,
  token: null,
  loading: false,
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
});

export const { setAuth, logout, update, setUser } = userSlice.actions;
export default userSlice.reducer;
