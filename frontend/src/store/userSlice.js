import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: ""
    },
    reducers: {
        addEmail(state, action) {
            state.email = action.payload
        },
        resetUser(state) {
            state.email = ""
        }
    }
})

export const { addEmail, resetUser } = userSlice.actions;
export default userSlice.reducer;