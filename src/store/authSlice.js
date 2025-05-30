import { createSlice } from "@reduxjs/toolkit";
import { disconnectSocket } from "../services/socketService";

const initialState = {
  userDetails: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Called on login/register success where we get user details and Json Web Token as response
    saveUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem(
        "userDetails",
        JSON.stringify(action.payload)
      );
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userDetails = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userDetails");
      disconnectSocket(); // Disconnect socket on logout
    },
  },
});

export const { logout, saveUserDetails, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
