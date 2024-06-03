import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {},
  reducers: {},
  extraReducers: () => {},
});

export const settingReducer = settingSlice.reducer;
