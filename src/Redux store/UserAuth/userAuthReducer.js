import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const userAuthInitialState = {};

const userAuthReducer = createSlice({
  name: "userAuthReducer",
  initialState: userAuthInitialState,
  reducers: {},
});
export const userAuthActions = userAuthReducer.actions;
export default userAuthReducer;
