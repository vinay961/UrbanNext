import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    role : null,
    loading : null,
    error : null
};

const authSlice = createSlice({ // It take three parameter name of slice, initialState, reducers.
    name:"auth",
    initialState,
    reducers:{
        loginStart: (state) => { 
            state.loading = true,
            state.error = false
        },
        loginSuccess: (state, action) => {
            state.loading = false,
            state.user = action.payload.user,
            state.role = action.payload.role
        },
        loginFailure: (state, action) => {
            state.loading = false,
            state.error = action.payload.error
        },
        logout: (state) => {
            state.user = null,
            state.role = null
        },
    },
});

export const {loginFailure, loginStart, loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
