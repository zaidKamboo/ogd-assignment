import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const darkmodeSlice = createSlice({
    initialState,
    name: "darkmode",
    reducers: {
        toggleDarkmode: (state) => !state,
    },
});

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;