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

export const getDocumentList = createAsyncThunk<ResDocument[], void>(
  "reading/getDocumentList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await readingApi.getDocumentListApi();
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDocument = createAsyncThunk<ResDocument, string>(
  "reading/getDocument",
  async (documentId, { rejectWithValue }) => {
    try {
      const res = await readingApi.getDocumentApi(documentId);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateDocument = {
  documentDetail: null,
  documentData: {
    list: null,
  },
};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // get list documents
    build.addCase(getDocumentList.fulfilled, (state, action) => {
      state.documentData.list = action.payload;
    });
    build.addCase(getDocumentList.rejected, (state) => {
      state.documentData.list = null;
    });

    // get document detail
    build.addCase(getDocument.fulfilled, (state, action) => {
      state.documentDetail = action.payload;
    });
    build.addCase(getDocument.rejected, (state) => {
      state.documentDetail = null;
    });
  },
});

export const readingReducer = readingSlice.reducer;
