import { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';
import { DOC_TITLE } from '../utils';
import AboutMain from '../components/about/AboutMain';

const About = () => {
    useEffect(() => {
        document.title = DOC_TITLE + "About";
    })

    return (
        <div className="flex flex-col bg-white dark:bg-zinc-950 text-gray-200">
            <Navbar />
            <AboutMain />
            <Footer />
        </div>
    );
}

export default About;