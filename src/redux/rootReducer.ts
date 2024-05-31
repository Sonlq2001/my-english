import { combineReducers } from "@reduxjs/toolkit";

import { authApi, authReducer } from "@app/features/auth/auth";
import { listeningQuery } from "@app/features/listening/listening";
import { vocabularyQuery } from "@app/features/vocabulary/vocabulary";
import { readingQuery } from "@app/features/reading/reading";
import { writingQuery } from "@app/features/writing/writing";
import { notepadReducer } from "@app/features/notepad/notepad";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [listeningQuery.reducerPath]: listeningQuery.reducer,
  auth: authReducer,
  [vocabularyQuery.reducerPath]: vocabularyQuery.reducer,
  [readingQuery.reducerPath]: readingQuery.reducer,
  [writingQuery.reducerPath]: writingQuery.reducer,
  notepad: notepadReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
