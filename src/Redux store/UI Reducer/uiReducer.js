import { createSlice } from "@reduxjs/toolkit";
const initial_UI_State = {
  isMenu: false,
  isSearchField: false,
  filterkeyword: "",
  loginEmpty: false,
};
const uiReducer = createSlice({
  name: "ui",
  initialState: initial_UI_State,
  reducers: {
    setIsMenu(state) {
      state.isMenu = !state.isMenu;
    },
    setSearchField(state) {
      state.isSearchField = !state.isSearchField;
    },
    setFilterKeyword(state, action) {
      state.filterkeyword = action.payload;
    },
    isloginEmpty(state, action) {
      state.loginEmpty = action.payload;
    },
  },
});

export const uiActions = uiReducer.actions;
export default uiReducer;
