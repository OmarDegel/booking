import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (tripId: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resp = await axios.post(
        `/wishlist`,
        { trip_id: tripId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(resp);
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
