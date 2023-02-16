import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "#types/User";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    savedEmail: "",
    user: null as User | null,
    token: null as string | null,
  },
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        user: User;
        token: string;
        rememberEmail: boolean;
      }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      if (action.payload.rememberEmail) {
        state.savedEmail = state.user.email;
      }
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
