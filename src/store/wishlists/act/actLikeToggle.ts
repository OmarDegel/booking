import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (tripId: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = (getState() as any).user.token;
    try {
      const resp = await axios.post(
        `/wishlist`,
        { trip_id: tripId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  },
);

export default actLikeToggle;
