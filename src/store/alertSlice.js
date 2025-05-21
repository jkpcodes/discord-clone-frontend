import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "error",
  vertical: "top",
  horizontal: "center",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.open = action.payload.open;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.vertical = action.payload.vertical;
      state.horizontal = action.payload.horizontal;
    },
    clearAlert: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "error";
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
