import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "../../types/TLoading.type";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";

interface IWishlist {
  itemsId: number[];
  error: null | string;
  loading: TLoading;
}

const initialState: IWishlist = {
  itemsId: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistItemsId(state, action) {
      state.itemsId = action.payload;
    },
    clearWishlist(state) {
      state.itemsId = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      state.loading = "succeeded";
      const tripId = action.meta.arg;
      const exists = state.itemsId.includes(tripId);
      if (exists) {
        state.itemsId = state.itemsId.filter((el) => el !== tripId);
      } else {
        state.itemsId.push(tripId);
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.itemsId = action.payload.data.wishlists.map((trip) => trip.trip_id);
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actLikeToggle, actGetWishlist };
export default wishlistSlice.reducer;
export const { setWishlistItemsId, clearWishlist } = wishlistSlice.actions;
