import { combineReducers } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/notepad";
import { authApi } from "@app/features/auth/auth";

const rootReducer = combineReducers({
  [notepadApi.reducerPath]: notepadApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
