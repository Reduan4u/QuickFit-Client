import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLink = <>
               <li className="justify-center text-xl"> <Link href='/'> Home </Link> </li>
               <li className="justify-center text-xl"> <Link href='/eatBetter'> Eat Better </Link> </li>
               <li className="justify-center text-xl"> <Link href='/manageWeight'> Manage Weight </Link> </li>
               <li className="justify-center text-xl"> <Link href='/more'> More </Link> </li>
               
                     
    </>
    return (
        <nav>
            <div className="navbar bg-sky-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/newsLetter' className="btn">NewsLetter</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;