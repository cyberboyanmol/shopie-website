import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./UI Reducer/uiReducer";
import userAuthReducer from "./UserAuth/userAuthReducer";

const rootReducers = combineReducers({
  ui: uiReducer.reducer,
  userAuth: userAuthReducer.reducer,
});

export default rootReducers;
