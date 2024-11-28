import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const spinnerSlice = createSlice({
    initialState,
    name: "spinner",
    reducers: {
        showSpinner: () => true,
        hideSpinner: () => false,
    },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
