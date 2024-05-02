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
  reducers: {
    logoutAction: (state) => {
      state.accessToken = "";
      state.user = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(loginSuccess.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    build.addCase(loginSuccess.rejected, (state) => {
      authSlice.caseReducers.logoutAction(state);
    });

    build.addCase(logout.fulfilled, (state) => {
      authSlice.caseReducers.logoutAction(state);
    });
    build.addCase(logout.rejected, (state) => {
      authSlice.caseReducers.logoutAction(state);
    });

    build.addCase(refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
    build.addCase(refreshToken.rejected, (state) => {
      authSlice.caseReducers.logoutAction(state);
    });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);

export const { logoutAction } = authSlice.actions;
