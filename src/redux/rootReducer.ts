import { combineReducers } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/notepad";
import { authApi, authReducer } from "@app/features/auth/auth";
import { listeningQuery } from "@app/features/listening/listening";
import { vocabularyQuery } from "@app/features/vocabulary/vocabulary";
import { readingQuery } from "@app/features/reading/reading";

const rootReducer = combineReducers({
  [notepadApi.reducerPath]: notepadApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [listeningQuery.reducerPath]: listeningQuery.reducer,
  auth: authReducer,
  [vocabularyQuery.reducerPath]: vocabularyQuery.reducer,
  [readingQuery.reducerPath]: readingQuery.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
