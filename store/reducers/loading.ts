import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    hint: "",
    isOpened: false,
  },
  reducers: {
    startLoading(state, action: PayloadAction<string>) {
      state.isOpened = true;
      state.hint = action.payload;
    },
    endLoading(state) {
      state.isOpened = false;
      state.hint = "";
    },
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
