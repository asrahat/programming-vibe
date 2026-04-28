import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {

    const links = (
        <>
        <li>
            <NavLink className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500 rounded-xl" : ""}`} to={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500 rounded-xl" : ""}`} to={"/books"}>Books</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500 rounded-xl" : ""}`} to={"/page-to-read"}>Page To Read</NavLink>
        </li>
        </>
    )

    return (
        <div className="max-lg:collapse  rounded-md container mx-auto">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <h2 className=" text-2xl font-bold">Book Vibe</h2>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
    <div className="navbar-end gap-5">
      <button className="px-4 py-1 border border-green-500 text-green-600 rounded-md ">
          Sign In
        </button>
        <button className="px-4 py-1 bg-green-500 text-white rounded-md ">
          Sign Up
        </button>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
     {links}
    </ul>
  </div>
</div>
    );
};

export default NavBar;