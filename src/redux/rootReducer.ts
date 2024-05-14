import { combineReducers } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/notepad";
import { authApi, authReducer } from "@app/features/auth/auth";
import { podcastQuery } from "@app/features/listening/listening";

const rootReducer = combineReducers({
  [notepadApi.reducerPath]: notepadApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [podcastQuery.reducerPath]: podcastQuery.reducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
