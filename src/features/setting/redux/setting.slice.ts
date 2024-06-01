import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { settingApi } from "@app/features/setting/api/setting.api";
import {
  ReqCreatePodcast,
  ResPodcast,
} from "@app/features/setting/types/create-podcast.type";

export const createPodcast = createAsyncThunk<ResPodcast, ReqCreatePodcast>(
  "setting/createPodcast",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await settingApi.createPodcastApi(payload);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  podcastData: {
    list: null,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const settingReducer = settingSlice.reducer;
