import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ReqVocabulary } from "../types/vocabulary.type";
import { vocabularyApi } from "../api/vocabulary.api";

export const postCreateVocabulary = createAsyncThunk<void, ReqVocabulary>(
  "vocabulary/postCreateVocabulary",
  async (data, { rejectWithValue }) => {
    try {
      await vocabularyApi.postCreateVocabularyApi(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {},
  reducers: {},
});

export const vocabularyReducer = vocabularySlice.reducer;
