import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { hideAlert } from '../../store/slices/alert_slice';
import { selectAlert } from '../../store/selectors';

const Alert = () => {
    const dispatch = useDispatch();
    const { message, type, show } = useSelector(selectAlert);

    const handleClose = dispatch(hideAlert());

    useEffect(() => {
        if (show) {
            const timeout = setTimeout(() => dispatch(hideAlert()), 3000);
            return () => clearTimeout(timeout);
        }
    }, [dispatch, show]);

    if (!show) return null;

    return (
        <div
            className={`fixed z-10 top-4 right-4 p-4 rounded-md shadow-lg flex items-center justify-between transition-transform transform duration-300 ease-in-out 
                        ${type === 'success' ? 'bg-green-500' : ''} 
                        ${type === 'danger' ? 'bg-red-500' : ''} 
                        ${type === 'warning' ? 'bg-yellow-500' : ''} 
                        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
            <span className="text-white">{message}</span>
            <button onClick={handleClose} className="ml-4 bg-transparent text-white">
                <AiOutlineClose size={20} />
            </button>
        </div>
    );
};

export default Alert; 