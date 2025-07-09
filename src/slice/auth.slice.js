import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: false
    },
    reducers: {
        loginAction: (state) => {
            state.value = true;
        },
        logoutAction: (state) => {
            state.value = false;
        }
    }
})

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;