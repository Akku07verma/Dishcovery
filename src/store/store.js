import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth.slice";

export const store = configureStore({
    reducer: {
        authReducer
    },
    devTools: true
})