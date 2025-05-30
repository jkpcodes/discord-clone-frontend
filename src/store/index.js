import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertReducer from "./alertSlice";
import friendReducer from "./friendSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    friend: friendReducer,
  },
});

export default store;
