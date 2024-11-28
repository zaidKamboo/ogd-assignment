import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Alert from "../components/common/Alert";
import TopLoadingBar from "../components/common/Toploadingbar";
import Spinner from "../components/common/Spinner";
import About from "./About";
import AddNewUser from "./AddNewUser";
import ViewUserDetails from "./ViewUserDetails";

const AllRoutes = () => {
    const routes = [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/add-new-user", element: <AddNewUser /> },
        { path: "/view-user-details", element: <ViewUserDetails /> },


    ]
    return (
        <Router>
            <Alert />
            <TopLoadingBar />
            <Spinner />
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Router>
    )
}

export default AllRoutes;