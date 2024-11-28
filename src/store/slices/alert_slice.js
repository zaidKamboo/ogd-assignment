import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    type: "",
    show: false,
};

const alertSlice = createSlice({
    initialState,
    name: "alert",
    reducers: {
        showAlert: (_, { payload }) => {
            return { ...payload, show: true };
        },
        hideAlert: () => initialState,
    },
});

export const { showAlert, hideAlert } = alertSlice?.actions;
export default alertSlice.reducer;
