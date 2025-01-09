import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/tinyLogo.jpg';
import AuthContext from '../AuthContext/AuthContext';
import { IoMdLogIn } from 'react-icons/io';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const links = (
        <>
            <li className="mx-2">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="/services">Services</NavLink>
            </li>
            {user && (
                <li className="mx-2">
                    <NavLink to="/addService">Add Service</NavLink>
                </li>
            )}
            {user && (
                <li className="mx-2">
                    <NavLink to="/myServices">My Services</NavLink>
                </li>
            )}
            {user && (
                <li className="mx-2">
                    <NavLink to="/myReviews">My Reviews</NavLink>
                </li>
            )}
            <li className="mx-2">
                <NavLink to="/aboutUs">About Us</NavLink>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 z-50 bg-green-200 w-full">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <img
                            className="w-32 h-auto rounded-md"
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user?.displayName}
                            >
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img
                                            src={user?.photoURL}
                                            alt="User Avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={userSignOut}
                                className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-900 hover:text-white transition flex items-center gap-2"
                            >
                                Signout <FaSignOutAlt size={20} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link
                                to="/login"
                                className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-900 hover:text-white transition flex items-center gap-2"
                            >
                                Login <IoMdLogIn size={20} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
