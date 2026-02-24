import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settings from "./settings/settingsSlice";
import wishlists from "./wishlists/wishlistsSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};
const rootReducer = combineReducers({
  settings,
  wishlist: persistReducer(wishlistPersistConfig, wishlists),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
