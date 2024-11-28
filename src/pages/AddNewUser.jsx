import { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';
import { DOC_TITLE } from '../utils';
import AddNewUserForm from '../components/add-new-user/AddNewUserForm';

const AddNewUser = () => {
    useEffect(() => {
        document.title = DOC_TITLE + "Add New User";
    })

    return (
        <div className="flex flex-col bg-white dark:bg-zinc-950 text-gray-200">
            <Navbar />
            <AddNewUserForm />
            <Footer />
        </div>
    );
}

export default AddNewUser;