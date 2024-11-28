import { configureStore } from "@reduxjs/toolkit";
import darkmode from "./slices/darkmode_slice";
import users from "./slices/users_slice";
import alertState from "./slices/alert_slice";
import toploadingbar from "./slices/top_loading_bar_slice";
import spinner from "./slices/spinner_slice";
import user from "./slices/user_slice";

const store = configureStore({
    reducer: {
        darkmode,
        users,
        alertState,
        spinner,
        toploadingbar,
        user,
    },
});

export default store;
