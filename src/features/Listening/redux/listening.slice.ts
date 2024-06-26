import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { listeningApi } from "@app/features/listening/api/listening.api";
import {
  InitialStateListening,
  ReqCreatePodcast,
  ReqUpdatePodcast,
  ResListPodcast,
  ResPodcast,
} from "@app/features/listening/types/listening.type";

export const getListPodcasts = createAsyncThunk<ResListPodcast, void>(
  "listening/getListPodcasts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await listeningApi.getListPodcastsApi();
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPodcast = createAsyncThunk<ResPodcast, string>(
  "listening/getPodcast",
  async (podcastId, { rejectWithValue }) => {
    try {
      const res = await listeningApi.getPodcastApi(podcastId);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePodcast = createAsyncThunk<string, string>(
  "listening/deletePodcast",
  async (podcastId, { rejectWithValue }) => {
    try {
      await listeningApi.deletePodcastApi(podcastId);
      return podcastId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createPodcast = createAsyncThunk<ResPodcast, ReqCreatePodcast>(
  "setting/createPodcast",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await listeningApi.createPodcastApi(payload);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePodcast = createAsyncThunk<ResPodcast, ReqUpdatePodcast>(
  "listening/updatePodcast",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await listeningApi.updatePodcastApi(payload);
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateListening = {
  podcastData: {
    list: null,
  },
  podcastDetail: null,
};

const listeningSlice = createSlice({
  name: "listening",
  initialState,
  reducers: {
    resetPodcast(state) {
      state.podcastDetail = null;
    },
  },
  extraReducers: (build) => {
    // get list podcast
    build.addCase(getListPodcasts.fulfilled, (state, action) => {
      state.podcastData.list = action.payload;
    });
    build.addCase(getListPodcasts.rejected, (state) => {
      state.podcastData.list = null;
    });

    // get podcast
    build.addCase(getPodcast.fulfilled, (state, action) => {
      state.podcastDetail = action.payload;
    });
    build.addCase(getPodcast.rejected, (state) => {
      state.podcastDetail = null;
    });

    // delete podcast
    build.addCase(deletePodcast.fulfilled, (state, action) => {
      if (state.podcastData.list) {
        state.podcastData.list = state.podcastData.list.filter(
          (item) => item.id !== action.payload
        );
      }
    });
  },
});

export const listeningReducer = listeningSlice.reducer;
export const { resetPodcast } = listeningSlice.actions;
