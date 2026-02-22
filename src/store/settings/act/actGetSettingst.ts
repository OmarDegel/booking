import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetSettings = createAsyncThunk(
  "settings/actGetSettings",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("settings");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data.message || error.message);
      } else {
        return thunkAPI.rejectWithValue("An unexpected error");
      }
    }
  },
);
