
const AboutMain = () => {
    return (
        <div className="container mx-auto p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
                    About Our Application
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Discover more about our platform, purpose, and features.
                </p>
            </header>
            <main className="space-y-8">
                <section className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                        Who We Are
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Our application is designed to simplify user management with intuitive
                        interfaces, powerful features, and robust search capabilities. Whether
                        you're managing employees, clients, or members, we've got you covered.
                    </p>
                </section>
                <section className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                        Key Features
                    </h2>
                    <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>Search users by name or email with real-time filtering.</li>
                        <li>Add new users effortlessly with a simple interface.</li>
                        <li>Dark mode support for better accessibility and usability.</li>
                        <li>Fully responsive design for seamless use on any device.</li>
                    </ul>
                </section>
                <section className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Have questions or need assistance? Reach out to us at:
                    </p>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center space-x-2">
                            <span className="font-medium text-gray-800 dark:text-gray-50">Email:</span>
                            <span className="text-gray-600 dark:text-gray-400">support@example.com</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <span className="font-medium text-gray-800 dark:text-gray-50">Phone:</span>
                            <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutMain;
