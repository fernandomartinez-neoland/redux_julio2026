import { configureStore } from "@reduxjs/toolkit";

import reducidorC from "./contador.redux";

export const store = configureStore({
  reducer: {
    count: reducidorC,
  },
});

export type RootState = ReturnType<typeof store.getState>;
