import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settings from "./settings/settingsSlice";
import wishlists from "./wishlists/wishlistsSlice";
import user from "./user/userSlice";

import storageEngine from "redux-persist/lib/storage";
const storage = storageEngine.default || storageEngine;
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

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "token"],
};

const rootReducer = combineReducers({
  settings,
  wishlist: persistReducer(wishlistPersistConfig, wishlists),
  user: persistReducer(userPersistConfig, user),
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

export const persistor = persistStore(store);

export { store };
