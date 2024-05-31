import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/api/notepad.api";
import {
  ReqCreateNotepad,
  ResNotepad,
} from "@app/features/notepad/types/notepad.type";

export const createNotepad = createAsyncThunk<ResNotepad, ReqCreateNotepad>(
  "notepad/createNotepad",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await notepadApi.createNotepadApi(payload);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const notepadSlice = createSlice({
  name: "notepad",
  initialState: {},
  reducers: {},
});

export const notepadReducer = notepadSlice.reducer;
