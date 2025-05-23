import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    // Called on login/register success where we get user details and Json Web Token as response
    saveUserDetails: (state, action) => {
      state.userDetails = action.payload;
      localStorage.setItem(
        "userDetails",
        JSON.stringify(action.payload)
      );
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.userDetails = null;
      localStorage.removeItem("userDetails");
    },
  },
});

export const { logout, saveUserDetails, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
