// Store.js File is used to configure the Redux store for the application.
// configureStore is imported from Redux Toolkit to set up the store with the necessary reducers.

import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice, // Authentication slice reducer
    },
});
