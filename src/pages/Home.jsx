import { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, resetUsers } from '../store/slices/users_slice';
import UsersTable from '../components/home/UsersTable';
import Footer from '../components/common/Footer';
import { DOC_TITLE } from '../utils';
import { selectUsers } from '../store/selectors';

const Home = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = DOC_TITLE + "Home";
        if (users?.length === 0)
            dispatch(fetchUsers());
        // return () => dispatch(resetUsers());
    })

    return (
        <div className="flex flex-col bg-white dark:bg-zinc-950 text-gray-200">
            <Navbar />
            <main className="flex-grow overflow-auto">
                <UsersTable />
            </main>
            <Footer />
        </div>
    );
}

export default Home;