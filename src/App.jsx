import { useEffect } from "react"
import AllRoutes from "./pages"
import { useSelector } from "react-redux";
import { selectDarkmode } from "./store/selectors";

const App = () => {

  const darkmode = useSelector(selectDarkmode);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkmode])
  return (
    <AllRoutes />
  )
}

export default App