import { createSlice } from "@reduxjs/toolkit"
import { removeFromLocalStorage, setToLocalStorage } from "../../helpers/function/encrypted-storage";


const initialState = {
    user: null,
    isUserLoggedIn: false,
    failure: 0,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isUserLoggedIn = true;
            setToLocalStorage("token", action.payload);
            state.failure = 0;
        },
        register: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.isUserLoggedIn = false;
            state.user = null;
            removeFromLocalStorage("token");
        },
        failAttempt: (state) => {
            state.failure += 1;
        },
        resetFailure: (state) => {
            state.failure = 0;
        }
    }
})

export const { login, register, logout, failAttempt, resetFailure } = authSlice.actions;
export default authSlice.reducer;