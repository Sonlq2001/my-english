import { combineReducers } from "@reduxjs/toolkit";

import { authApi, authReducer } from "@app/features/auth/auth";
import {
  listeningQuery,
  listeningReducer,
} from "@app/features/listening/listening";
import { vocabularyQuery } from "@app/features/vocabulary/vocabulary";
import { readingQuery, readingReducer } from "@app/features/reading/reading";
import { writingQuery } from "@app/features/writing/writing";
import { notepadReducer } from "@app/features/notepad/notepad";
import { notepadQuery } from "@app/features/notepad/notepad";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [listeningQuery.reducerPath]: listeningQuery.reducer,
  auth: authReducer,
  [vocabularyQuery.reducerPath]: vocabularyQuery.reducer,
  [readingQuery.reducerPath]: readingQuery.reducer,
  [writingQuery.reducerPath]: writingQuery.reducer,
  [notepadQuery.reducerPath]: notepadQuery.reducer,
  notepad: notepadReducer,
  listening: listeningReducer,
  reading: readingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
