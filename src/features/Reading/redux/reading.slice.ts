import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { readingApi } from "@app/features/reading/api/reading.api";
import {
  InitialStateDocument,
  ReqDocument,
  ResDocument,
} from "@app/features/reading/types/reading.type";

export const createDocument = createAsyncThunk<ResDocument, ReqDocument>(
  "reading/createDocument",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await readingApi.createDocumentApi(payload);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateDocument = {};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const notepadReducer = readingSlice.reducer;
