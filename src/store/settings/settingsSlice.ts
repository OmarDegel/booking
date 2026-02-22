import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { actGetSettings } from "./act/actGetSettingst";

interface ISettings {
  data: Record<string, any>;
  loading: boolean;
  error: string | null;
}

const initialState: ISettings = {
  data: {},
  loading: false,
  error: null,
};
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(actGetSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actGetSettings.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data ?? {};
    });
    builder.addCase(actGetSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
export { actGetSettings};
export const {  } = settingsSlice.actions;
export default settingsSlice.reducer;
