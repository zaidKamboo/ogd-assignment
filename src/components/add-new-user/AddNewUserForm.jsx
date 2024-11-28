import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/users_slice";
import { useNavigate } from "react-router-dom";

const AddNewUserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        username: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = ({ target: { name: n, value: v } }) => {
        if (n.includes("address") || n.includes("company")) {
            const [section, field] = n.split(".");
            setFormData(prevState => ({
                ...prevState,
                [section]: {
                    ...prevState[section],
                    [field]: v
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [n]: v
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));
        setFormData({
            name: "",
            email: "",
            phone: "",
            username: "",
            website: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        });
        navigate("/")
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                Add New User
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full p-2 border border-gray-300 rounded-md text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Website"
                        className="w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                </div>

                <div className="text-gray-800 dark:text-gray-50 mt-4">
                    <h3 className="font-semibold mb-2">Address</h3>
                    <input
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        placeholder="Street"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md  text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="address.suite"
                        value={formData.address.suite}
                        onChange={handleChange}
                        placeholder="Suite"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="address.zipcode"
                        value={formData.address.zipcode}
                        onChange={handleChange}
                        placeholder="Zip Code"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="address.geo.lat"
                        value={formData.address.geo.lat}
                        onChange={handleChange}
                        placeholder="Latitude"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="address.geo.lng"
                        value={formData.address.geo.lng}
                        onChange={handleChange}
                        placeholder="Longitude"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md  text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                </div>

                <div className="text-gray-800 dark:text-gray-50 mt-4">
                    <h3 className="font-semibold mb-2">Company</h3>
                    <input
                        type="text"
                        name="company.name"
                        value={formData.company.name}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md  text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="company.catchPhrase"
                        value={formData.company.catchPhrase}
                        onChange={handleChange}
                        placeholder="Catch Phrase"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                    <input
                        type="text"
                        name="company.bs"
                        value={formData.company.bs}
                        onChange={handleChange}
                        placeholder="Business Slogan"
                        className="my-2 w-full p-2 border border-gray-300 rounded-md text-black  dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    />
                </div>

                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewUserForm;
