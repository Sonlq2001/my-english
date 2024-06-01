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

export const getNotepad = createAsyncThunk<ResNotepadItem, string>(
  "notepad/getNotepad",
  async (notepadId, { rejectWithValue }) => {
    try {
      const res = await notepadApi.getNotepadApi(notepadId);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteNotepad = createAsyncThunk<string, string>(
  "notepad/deleteNotepad",
  async (notepadId, { rejectWithValue }) => {
    try {
      await notepadApi.deleteNotepadApi(notepadId);
      return notepadId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateNotepad = {
  notepadData: { list: null },
  notepadDetail: null,
};

const notepadSlice = createSlice({
  name: "notepad",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // get list notepads
    build.addCase(getListNotepads.fulfilled, (state, action) => {
      state.notepadData.list = action.payload;
    });
    build.addCase(getListNotepads.rejected, (state) => {
      state.notepadData.list = null;
    });

    // get notepad detail
    build.addCase(getNotepad.fulfilled, (state, action) => {
      state.notepadDetail = action.payload;
    });
    build.addCase(getNotepad.rejected, (state) => {
      state.notepadDetail = null;
    });

    // delete notepad
    build.addCase(deleteNotepad.fulfilled, (state, action) => {
      if (state.notepadData.list) {
        state.notepadData.list = state.notepadData.list.filter(
          (item) => item.id !== action.payload
        );
      }
    });
  },
});

export const notepadReducer = notepadSlice.reducer;
