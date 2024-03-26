import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/features/user/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
