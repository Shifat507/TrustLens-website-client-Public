import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/tinyLogo.jpg'
import AuthContext from '../AuthContext/AuthContext';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const links = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/services'>Services</NavLink></li>
        <li className='mx-2'><NavLink to='/addService'>Add Service</NavLink></li>
        <li className='mx-2'><NavLink to='/myReviews'>My Reviews</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-2/4' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='mr-2'>
                        <button onClick={userSignOut} className="btn btn-warning">Signout</button>
                    </div> : <div className='flex items-center gap-2'>
                        <div className='mr-2'>
                            <Link to='/login' className="btn btn-primary">Login</Link>
                        </div>
                        <Link to='/register' className="btn btn-accent">Register</Link>
                    </div>
                }

            </div>

        </div>
    );
};

export default Navbar;