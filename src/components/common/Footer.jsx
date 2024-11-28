import React from "react";

const Footer = () => {
    return (
        <footer className="bg-cyan-50 dark:bg-slate-950 py-4">
            <div className="container mx-auto text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} User Directory. Built with ❤️ by Zaid Kamboo.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
