"use client"

import NavLink from "@/components/Common/NavLink";
import { AuthContext } from "@/components/Provider/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navLinkClass =
    "justify-center font-medium mr-6 pb-1 font-light border-b-2 hover: border-transparent transition-all duration-700 hover:delay-200";



  const handleSingOut = () => {
    logOut()
      .then(Swal.fire({
        position: "center",
        icon: "success",
        title: "User logOut Successfully!",
        showConfirmButton: false,
        timer: 1500
      }));
  }

  const navLink = (
    <>
      <div className="capitalize">
        <NavLink
          href="/"
          className={`${navLinkClass} `}
        >
          Home
        </NavLink>

        <NavLink
          href="/eatBetter"
          className={`${navLinkClass} `}
        >
          Eat Better
        </NavLink>

        <NavLink
          href="/getFit"
          className={`${navLinkClass} `}
        >
          Get Fit
        </NavLink>
        <NavLink
          href="/calculator"
          className={`${navLinkClass} `}
        >
          Calculator
        </NavLink>
        <NavLink
          href="/eshop"
          className={`${navLinkClass} `}
        >
          E-Shop
        </NavLink>

        <div className="dropdown dropdown-hover m-0">
          <div tabIndex={0} role="button" className={`${navLinkClass}  `}>
            <NavLink
              href="/more"
              className={`${navLinkClass}  `}
            >
              More
            </NavLink>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
            <NavLink
              href="/tips"
              className={`${navLinkClass}  `}
            >
              Tips
            </NavLink>
            <NavLink
              href="/contactUs"
              className={`${navLinkClass}  `}
            >
              Contact
            </NavLink>
            <NavLink
              href="/aboutUs"
              className={`${navLinkClass} `}
            >
              About Us
            </NavLink>
            <NavLink
              href="/experts"
              className={`${navLinkClass} `}
            >
              Our Expert
            </NavLink>
            <NavLink
              href="/bookmarks"
              className={`${navLinkClass}  `}
            >
              Bookmarks
            </NavLink>
          </ul>
        </div>

        {/* <NavLink
        href="/more"
        className={`${navLinkClass} `}
      >
        More
      </NavLink> */}

      </div>
    </>

  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 ">
      <div className="navbar  pt-4 pb-4 bg-white w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className=" text-xl">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="76.000000pt"
              height="31.000000pt"
              viewBox="0 0 276.000000 131.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
              </metadata>
              <g
                transform="translate(0.000000,131.000000) scale(0.050000,-0.050000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2911 2514 c-70 -131 -63 -173 57 -321 l88 -108 -143 -148 c-247
-256 -657 -460 -766 -382 -58 41 -98 52 -183 47 -65 -3 -231 -165 -285 -280
-58 -122 -158 -185 -225 -142 -24 15 -71 41 -104 57 -33 16 -124 91 -203 166
-369 354 -782 297 -1082 -149 -140 -207 -94 -613 94 -844 18 -22 45 -76 59
-120 82 -248 168 -290 594 -290 l342 0 91 80 c88 77 96 80 231 80 77 0 186 15
243 34 85 27 116 29 169 10 87 -32 152 -30 239 6 66 28 80 27 176 -11 127 -50
510 -41 643 16 70 29 81 29 145 -2 104 -49 243 -43 339 16 100 62 115 62 206
1 118 -81 213 -70 342 40 127 108 100 108 222 0 113 -100 192 -116 303 -58 57
29 68 28 155 -9 151 -65 513 -50 612 25 239 183 232 439 -18 611 -65 44 -92
77 -92 109 0 26 -20 77 -45 114 -25 37 -62 105 -82 151 -68 151 -219 267 -350
267 -31 0 -94 29 -143 65 -70 51 -109 65 -197 68 -151 6 -153 16 -42 196 120
194 139 271 87 368 -48 89 -177 183 -252 183 -32 0 -85 14 -117 31 -32 16
-103 38 -156 48 -107 21 -281 117 -282 156 -1 19 -76 25 -307 25 l-305 0 -58
-106z m323 -101 c20 -5 88 -16 151 -23 108 -12 316 -131 364 -208 9 -15 29
-11 62 10 57 38 121 27 184 -32 51 -47 60 -120 15 -120 -16 0 -41 -18 -55 -40
-13 -22 -36 -40 -50 -40 -36 0 -31 -29 14 -69 76 -69 201 66 172 184 -12 44
-9 48 16 27 24 -20 32 -17 43 18 17 53 74 45 83 -13 6 -45 -120 -249 -202
-326 -54 -50 -126 -28 -234 73 -41 38 -61 45 -90 29 -20 -11 -94 -40 -163 -64
-70 -25 -119 -51 -110 -58 9 -8 72 -58 141 -112 156 -124 156 -147 0 -257
-270 -192 -273 -197 -171 -282 60 -51 62 -56 28 -81 -20 -15 -99 -87 -176
-162 l-141 -135 162 -156 162 -156 -134 0 -134 0 -125 124 -126 125 0 -125 0
-124 -100 0 -100 0 0 470 c0 259 -4 470 -8 470 -78 0 -333 -172 -384 -259 -76
-128 -109 -64 -58 109 48 160 44 154 89 126 34 -21 57 -12 175 68 75 51 172
102 216 114 88 24 277 193 333 297 20 38 55 66 90 74 55 13 85 32 306 199
l103 77 -51 53 c-87 92 -318 132 -383 67 -34 -33 -35 -33 -23 10 9 37 3 45
-36 45 -26 0 -52 9 -59 20 -7 11 -1 20 14 20 19 1 18 6 -4 20 -25 16 -24 19 6
20 21 0 31 9 23 22 -10 15 0 18 28 9 35 -11 40 -7 30 23 -11 30 -6 29 29 -7
24 -24 59 -48 78 -54z m-2360 -1055 c341 -165 359 -744 26 -890 -44 -20 -80
-43 -80 -52 0 -28 200 -17 247 14 44 28 47 27 79 -40 78 -165 -116 -259 -351
-170 -116 44 -236 52 -298 18 -113 -60 -104 74 10 143 l57 35 -64 14 c-236 52
-394 451 -274 692 121 244 413 350 648 236z m1232 -22 c50 -66 25 -143 -56
-180 -113 -51 -219 115 -130 204 56 56 135 45 186 -24z m2134 -36 l0 -100
-170 0 -170 0 0 -100 0 -100 161 0 161 0 -6 -95 -6 -95 -155 0 -155 0 0 -195
0 -195 -115 0 -115 0 6 490 5 490 280 0 279 0 0 -100z m239 47 c53 -68 52 -98
-8 -158 -114 -114 -270 31 -170 158 24 31 62 53 89 53 27 0 65 -22 89 -53z
m341 -207 l0 -120 70 0 c68 0 70 -2 70 -80 0 -78 -2 -80 -70 -80 l-70 0 0
-119 c0 -117 17 -149 78 -150 61 -2 87 -150 30 -172 -198 -75 -308 21 -308
268 0 158 -3 171 -42 177 -69 10 -75 156 -7 156 47 0 49 6 49 120 l0 120 100
0 100 0 0 -120z m-2203 -122 c69 -24 75 -44 34 -117 -23 -43 -39 -49 -111 -44
-103 8 -160 -37 -160 -126 0 -107 50 -155 154 -148 90 5 143 -37 145 -116 3
-74 -281 -83 -376 -12 -317 234 -60 694 314 563z m-1237 -167 c0 -232 17 -271
120 -271 103 0 120 39 120 271 l0 169 105 0 105 0 -10 -235 c-14 -319 -69
-385 -320 -385 -256 0 -320 79 -320 399 l0 221 100 0 100 0 0 -169z m730 -131
l0 -300 -105 0 -105 0 0 300 0 300 105 0 105 0 0 -300z m2381 0 l1 -300 -106
0 -106 0 0 300 0 300 105 0 105 0 1 -300z m720 -89 c88 -88 30 -231 -93 -231
-61 0 -138 80 -138 144 0 51 88 136 140 136 23 0 64 -22 91 -49z"
                />
                <path
                  d="M3160 1577 c-38 -24 -119 -69 -180 -100 -60 -31 -99 -57 -85 -57 19
0 25 -74 25 -304 l0 -305 106 105 c103 102 108 104 225 105 l119 0 -104 65
c-133 82 -136 71 65 259 94 88 166 165 160 170 -11 12 -235 105 -251 105 -5 0
-41 -20 -80 -43z"
                />
                <path
                  d="M537 1150 c-93 -51 -143 -239 -96 -364 105 -276 459 -188 459 114 0
228 -178 350 -363 250z"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="flex gap-2 items-center justify-center ">   <p className="  text-orange-500 font-bold">{user?.email
            } </p>   <button onClick={handleSingOut} className="btn">Sing Out</button> </div> : <Link href="/login" className=" font-bold">Login</Link>
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
