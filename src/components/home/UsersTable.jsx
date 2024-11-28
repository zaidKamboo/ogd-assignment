import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/selectors";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/user_slice";

const UsersTable = () => {
    const users = useSelector(selectUsers);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredUsers = users.filter(
        ({ name, email }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="mb-6 flex items-center space-x-4">
                <div className="relative flex-grow max-w-lg">
                    <FaUser className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search users by name or email"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700 text-gray-950"
                        value={search}
                        onChange={({ target: { value: v } }) => setSearch(v)}
                    />
                </div>
                <Link
                    to="/add-new-user"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500 dark:focus:ring-blue-300 transition"
                >
                    Add New
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700 text-left">
                    <thead className="bg-blue-50 dark:bg-gray-950">
                        <tr>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                <div className="flex items-center space-x-2">
                                    <FaUser className="text-blue-500 dark:text-blue-400" />
                                    <span className="text-blue-500 dark:text-blue-400" >Name</span>
                                </div>
                            </th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                <div className="flex items-center space-x-2">
                                    <FaEnvelope className="text-blue-500 dark:text-blue-400" />
                                    <span className="text-blue-500 dark:text-blue-400" >Email</span>
                                </div>
                            </th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                <div className="flex items-center space-x-2">
                                    <FaPhone className="text-green-500 dark:text-green-400" />
                                    <span className="text-blue-500 dark:text-blue-400" >Phone</span>
                                </div>
                            </th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                <div className="flex items-center space-x-2">
                                    <FaBuilding className="text-yellow-500 dark:text-yellow-400" />
                                    <span className="text-blue-500 dark:text-blue-400" >Company</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr
                                    onClick={() => {
                                        dispatch(setUser(user));
                                        navigate("/view-user-details");
                                    }}
                                    key={user.name}
                                    className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <td className=" text-zinc-950 dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2">{user.name}</td>
                                    <td className=" text-zinc-950 dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2">{user.email}</td>
                                    <td className=" text-zinc-950 dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2">{user.phone}</td>
                                    <td className=" text-zinc-950 dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2">{user.company.name}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center text-gray-500 dark:text-gray-400 py-4"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
