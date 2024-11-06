import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authQuery } from "@app/features/auth/auth";
import { listeningQuery } from "@app/features/listening/listening";
import { vocabularyQuery } from "@app/features/vocabulary/vocabulary";
import { readingQuery } from "@app/features/reading/reading";
import { writingQuery } from "@app/features/writing/writing";
import { notepadQuery } from "@app/features/notepad/notepad";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authQuery.middleware)
      .concat(listeningQuery.middleware)
      .concat(vocabularyQuery.middleware)
      .concat(readingQuery.middleware)
      .concat(writingQuery.middleware)
      .concat(notepadQuery.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
