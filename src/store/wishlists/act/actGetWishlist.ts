import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TTrip } from "../../../types/Trips.Type";

type TResponse = TTrip[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(`wishlist`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  },
);

export default actGetWishlist;
