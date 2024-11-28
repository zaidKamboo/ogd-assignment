import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { selectDarkmode, selectToploadingbar } from '../../store/selectors';

const TopLoadingBar = () => {
    const topLoadingBar = useSelector(selectToploadingbar);
    const darkMode = useSelector(selectDarkmode);

    useEffect(() => {
        if (topLoadingBar) {
            NProgress.start();
        } else {
            NProgress.done();
        }
    }, [topLoadingBar]);

    useEffect(() => {
        const barElement = document.querySelector('#nprogress .bar');
        if (barElement) {
            barElement.style.boxShadow = darkMode
                ? '0 0 25px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 69, 0, 0.9), 0 0 25px rgba(255, 215, 0, 0.9), 0 0 25px rgba(255, 0, 0, 0.9)'
                : '0 0 25px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 255, 0, 0.9), 0 0 25px rgba(0, 255, 255, 0.9), 0 0 25px rgba(0, 0, 255, 0.9)';
        }
    }, [darkMode]);

    return null;
};

export default TopLoadingBar;
