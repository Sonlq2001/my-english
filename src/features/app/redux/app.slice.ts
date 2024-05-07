import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { appApi } from "../api/app.api";
import { ResImageUpload } from "../types/app.type";

export const uploadFile = createAsyncThunk<ResImageUpload, FormData>(
  "app/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      const res = await appApi.uploadFileApi(file);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: {},
  reducers: {},
});

export const appReducer = appSlice.reducer;
