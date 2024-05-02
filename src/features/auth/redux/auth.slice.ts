import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "../api/auth.api";
import {
  InitialStateAuth,
  PayloadLoginSuccess,
  ResLoginSuccess,
  ResRefreshToken,
} from "../types/auth.type";

export const loginSuccess = createAsyncThunk<
  ResLoginSuccess,
  PayloadLoginSuccess
>("auth/loginSuccess", async (payload, { rejectWithValue }) => {
  try {
    const res = await authApi.loginSuccessApi(payload);
    return res.data.metadata;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk<unknown, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logoutApi();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk<ResRefreshToken>(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const res = await authApi.refreshTokenApi();
      return res.data.metadata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: InitialStateAuth = {
  accessToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(loginSuccess.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    build.addCase(loginSuccess.rejected, (state) => {
      state.accessToken = "";
      state.user = null;
    });

    build.addCase(logout.fulfilled, (state) => {
      state.accessToken = "";
      state.user = null;
    });
    build.addCase(logout.rejected, (state) => {
      state.accessToken = "";
      state.user = null;
    });

    build.addCase(refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
    build.addCase(refreshToken.rejected, (state) => {
      state.accessToken = "";
      state.user = null;
    });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
