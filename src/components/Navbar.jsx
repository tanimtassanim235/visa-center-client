import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const roads =
        <>
            <NavLink className={({ isActive }) => `font-bold text-lg text-black ml-5 ${isActive ? 'text-blue-500' : 'hover:text-red-500'}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `font-bold text-black text-lg ml-5 ${isActive ? 'text-blue-500' : 'hover:text-red-500'}`} to="/allvisas">All visas</NavLink>
            <NavLink className={({ isActive }) => `font-bold text-black text-lg ml-5 ${isActive ? 'text-blue-500' : 'hover:text-red-500'}`} to="/addvisa">Add Visa</NavLink>
            <NavLink className={({ isActive }) => `font-bold text-black text-lg ml-5 ${isActive ? 'text-blue-500' : 'hover:text-red-500'}`} to={`/addedvisas`}>My added visas</NavLink>
            <NavLink className={({ isActive }) => `font-bold text-black ml-5 text-lg text- ${isActive ? 'text-blue-500' : 'hover:text-red-500'}`} to={`/appliedVisa`}>My Visa application</NavLink>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-green-400">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-green-400">
                            {
                                roads
                            }
                        </ul>
                    </div>
                    <Link to="/" className="text-xl italic uppercase ">Dallas Visa Center</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            roads
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className=' size-14' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                    <img className="w-14 rounded-3xl" src={`${user?.photoURL}`} alt="" />
                                    <Tooltip id="my-tooltip" />
                                </div>
                                <button onClick={logOut} className="btn bg-gradient-to-r from-[#283c86] to-[#45a247]  text-white ml-2 rounded-xl">Log Out</button>
                            </>
                            :
                            <>
                                <Link to="/login" className='btn mr-5 bg-gradient-to-r from-[#283c86] to-[#45a247]  text-white'>Log In</Link>
                                <Link to="/register" className='btn bg-gradient-to-r from-[#f2f2] to-[#45a203]  text-white'>Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;