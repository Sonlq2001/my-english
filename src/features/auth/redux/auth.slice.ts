import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { InitialStateAuth } from "../types/auth.type";
import { authApi } from "../api/auth.api";
import { PayloadLoginSuccess, ResLoginSuccess } from "../types/auth.type";

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

const initialState: InitialStateAuth = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(loginSuccess.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
    build.addCase(loginSuccess.rejected, (state) => {
      state.accessToken = "";
    });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);
