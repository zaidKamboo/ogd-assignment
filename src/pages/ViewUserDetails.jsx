import { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';
import { DOC_TITLE } from '../utils';
import ViewUserDetailsMain from '../components/view_user_details/ViewUserDetailsMain';

const ViewUserDetails = () => {
    useEffect(() => {
        document.title = DOC_TITLE + "View User Details";
    })

    return (
        <div className="flex flex-col bg-white dark:bg-zinc-950 text-gray-200">
            <Navbar />
            <ViewUserDetailsMain />
            <Footer />
        </div>
    );
}

export default ViewUserDetails;