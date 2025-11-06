import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: null,
    Loading: false,
    error: null
}

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers:{
        createRoomStart: (state) => {
            state.Loading = true;
            state.error = null;
        },
        createRoomSuccess: (state, action) => {
            state.Loading = false;
            state.room = action.payload;
        },
        createRoomFailure: (state, action) => {
            state.Loading = false;
            state.error = action.payload;
        }
    }
})

export const { createRoomStart, createRoomSuccess, createRoomFailure } = roomSlice.actions;

export default roomSlice.reducer;
