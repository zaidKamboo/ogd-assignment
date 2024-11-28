import { createSlice } from "@reduxjs/toolkit";
import { showAlert } from "./alert_slice";
import { dangerAlert, successAlert } from "../../utils";
const initialState = [];
import axios from "axios";
import { hideSpinner, showSpinner } from "./spinner_slice";
import { hideToploadingBar, showToploadingBar } from "./top_loading_bar_slice";

const usersSlice = createSlice({
    initialState,
    name: "users",
    reducers: {
        setUsers: (_, { payload: p }) => p,
        resetUsers: () => initialState,
    },
});

export const { setUsers, resetUsers } = usersSlice.actions;
export const fetchUsers = () => (dispatch) => {
    try {
        dispatch(showToploadingBar());
        dispatch(showSpinner());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
                dispatch(setUsers(res.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(showAlert(dangerAlert(err?.response?.data?.message)));
            })
            .finally(() => {
                dispatch(hideSpinner());
                dispatch(hideToploadingBar());
            });
    } catch (error) {
        console.log(error);
        dispatch(showAlert(dangerAlert(error?.message)));
    }
};

export const addUser = (user) => (dispatch, getState) => {
    try {
        const currentUsers = getState().users;
        const updatedUsers = [...currentUsers, user];
        dispatch(setUsers(updatedUsers));
        dispatch(showAlert(successAlert("User added successfully!")));
    } catch (error) {
        console.log(error);
        dispatch(showAlert(dangerAlert(error?.message)));
    }
};

export default usersSlice.reducer;
