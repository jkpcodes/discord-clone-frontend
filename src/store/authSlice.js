import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: null,
  },
  reducers: {
    logout: (state) => {
      state.userDetails = null;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
