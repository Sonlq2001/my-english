import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { notepadApi } from "@app/features/notepad/api/notepad.api";
import {
  ReqCreateNotepad,
  ResNotepad,
  ResNotepadItem,
  InitialStateNotepad,
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

export const getListNotepads = createAsyncThunk<ResNotepadItem[], void>(
  "notepad/getListNotepads",
  async (_, { rejectWithValue }) => {
    try {
      const res = await notepadApi.getListNotepadsApi();
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateNotepad = {
  notepadData: { list: null },
};

const notepadSlice = createSlice({
  name: "notepad",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getListNotepads.fulfilled, (state, action) => {
      state.notepadData.list = action.payload;
    });
  },
});

export const notepadReducer = notepadSlice.reducer;
