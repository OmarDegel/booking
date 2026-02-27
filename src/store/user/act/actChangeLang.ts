import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ChangeLangPayload {
  lang: string;
}

const actChangeLang = createAsyncThunk<
  string, 
  string, 
  { state: any; rejectValue: string }
>("user/actChangeLang", async (lang, thunkAPI) => {
  const { getState, rejectWithValue } = thunkAPI;
  const token = getState().user.token;

  if (!token) {
    return rejectWithValue("User is not authenticated");
  }

  try {
    const response = await axios.post(
      "profile/lang",
      { lang },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data?.lang || lang;
  } catch (error: any) {
    console.error("actChangeLang error:", error);
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});

export default actChangeLang;
