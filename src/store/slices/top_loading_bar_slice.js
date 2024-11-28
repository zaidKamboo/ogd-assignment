import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const toploadingBarSlice = createSlice({
    initialState,
    name: "toploadingBar",
    reducers: {
        showToploadingBar: () => true,
        hideToploadingBar: () => false,
    },
});

export const { showToploadingBar, hideToploadingBar } =
    toploadingBarSlice.actions;

export default toploadingBarSlice.reducer;
