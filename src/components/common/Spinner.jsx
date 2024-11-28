import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectDarkmode, selectSpinner } from '../../store/selectors';

const Spinner = () => {
    const darkmode = useSelector(selectDarkmode);
    const spinner = useSelector(selectSpinner);

    if (!spinner) return null;

    return (
        <div className="fixed top-0 left-0 z-50 dark:bg-[rgba(0,0,0,.85)] bg-[rgba(0,0,0,.9)] w-full h-full flex items-center justify-center">
            <div className={`bg-opacity-80 ${darkmode ? 'text-white' : 'text-white'} rounded-lg p-6 flex items-center justify-center shadow-lg`}>
                <motion.div
                    className="flex items-center"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                    }}
                    style={{
                        filter: darkmode
                            ? `drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px rgba(255, 69, 0, 0.5)) drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))`
                            : `drop-shadow(0 0 3px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 10px rgba(0, 255, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 255, 0.5))`
                    }}
                >
                    <AiOutlineLoading3Quarters className="text-6xl" />
                </motion.div>
                <p className={`ml-4 text-2xl font-semibold ${darkmode ? 'text-white' : 'text-white'} tracking-wide`} style={{
                    textShadow: darkmode
                        ? '0 0 4px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 69, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 0, 0, 0.5)'
                        : '0 0 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 0, 255, 0.5)'
                }}>Loading...</p>
            </div>
        </div>
    );
};

export default Spinner;
