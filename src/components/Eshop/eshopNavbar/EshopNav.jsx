"use client";

import { useContext } from "react";
import { AuthContext } from "@/components/Provider/AuthProvider";
import Link from "next/link";
import Ebutton from "@/components/Common/Ebutton";
import UseCartData from "@/hooks/UseCartData";

function EshopNav(props) {
  const { user } = useContext(AuthContext);
  const { products } = UseCartData()

  return (
    <div>
      {user && (
        <div className={`navbar border-b-2 border-gray-400`}>
          {/* navbar start where search  */}
          <div className="flex-1">
            {/* <p className="text-2xl hidden md:block pr-2">Search Product</p> */}
            {/* <input
              type="text"
              className="border-2 border-primary w-full md:w-1/3 p-2 rounded bg-tertiary  text-lg placeholder-secondary placeholder-opacity-60"
              placeholder="Search Product "></input> */}
              <Link href={`/eshop/products`}>
                <Ebutton>
                Products
                </Ebutton>
              </Link>
          </div>
          {/* navbar end or right side  */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost bg-gray-800 btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge text-lg font-bold badge-sm indicator-item">{products?.length}</span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{products?.length} Items</span>
                  {/* <span className="text-info">Subtotal: $999</span>  */}
                  <div className="card-actions">
                    <Link href={`/eshop/cart/${user?.email}`}>
                      <Ebutton>View Cart</Ebutton>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            {/* <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default EshopNav;
