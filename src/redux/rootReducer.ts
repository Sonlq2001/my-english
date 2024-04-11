import { combineReducers } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/notepad";

const rootReducer = combineReducers({
  [notepadApi.reducerPath]: notepadApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
