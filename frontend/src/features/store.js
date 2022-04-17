import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: "userReducers",
  },
});

export default store;
