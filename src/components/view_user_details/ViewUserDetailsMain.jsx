import { useSelector } from "react-redux";
import { selectUser } from "../../store/selectors";

const ViewUserDetailsMain = () => {
    const user = useSelector(selectUser);

    if (!user) {
        return (
            <div className="container mx-auto p-6 max-w-4xl text-center">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
                    User Not Found
                </h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6">
                User Details
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
                {/* Basic Details */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                        Basic Details
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Name:</span> {user.name}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Username:</span> {user.username}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Phone:</span> {user.phone}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Website:</span>{" "}
                        <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {user.website}
                        </a>
                    </p>
                </div>

                {/* Address Details */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                        Address
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Street:</span> {user.address.street}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Suite:</span> {user.address.suite}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">City:</span> {user.address.city}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Zip Code:</span> {user.address.zipcode}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Geo:</span> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                    </p>
                </div>

                {/* Company Details */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                        Company
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Name:</span> {user.company.name}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Catch Phrase:</span> {user.company.catchPhrase}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200">
                        <span className="font-semibold">Business Slogan:</span> {user.company.bs}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewUserDetailsMain;
