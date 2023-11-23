import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    admin: "",
  },
  reducers: {
    addEmail(state, action) {
      state.email = action.payload;
    },
    verifyAdmin(state, action) {
      state.admin = action.payload;
    },
    resetUser(state) {
      state.email = null;
      state.admin = null;
    },
  },
});

export const { addEmail, resetUser, verifyAdmin } = userSlice.actions;
export default userSlice.reducer;
