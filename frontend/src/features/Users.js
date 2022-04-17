import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    login: (action) => {},
    logout: () => {},
  },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
