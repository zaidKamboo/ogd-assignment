import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaUsers, FaHome, FaInfoCircle } from "react-icons/fa";
import { selectDarkmode } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkmode } from "../../store/slices/darkmode_slice";

const Navbar = () => {
    const darkmode = useSelector(selectDarkmode);
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleDarkmode());
    const navlinks = [
        { to: '/', link: "Home", icon: <FaHome className="mr-2" /> },
        { to: "/about", link: "About", icon: <FaInfoCircle className="mr-2" /> }
    ]
    return (
        <nav className="bg-cyan-50 dark:bg-slate-950 shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center text-gray-800 dark:text-gray-200 text-xl font-bold"
                >
                    <FaUsers className="mr-2" />
                    User Directory
                </Link>

                <div className="hidden md:flex space-x-4">
                    {navlinks.map(({ link, to, icon }) =>
                        <Link
                            to={to}
                            key={to}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
                        >
                            {icon}
                            {link}
                        </Link>
                    )}
                </div>

                <button
                    onClick={handleToggle}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                    {darkmode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            <div className="md:hidden ">
                <div className="flex flex-col items-center space-y-2 pt-4 pb-2">
                    {navlinks.map(({ to, link, icon }) =>
                        <Link
                            to={to}
                            key={to}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            {icon}
                            {link}
                        </Link>)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
