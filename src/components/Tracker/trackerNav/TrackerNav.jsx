import Link from "next/link";
import React from "react";

const TrackerNav = () => {
  return (
    <div>
      <div className="navbar text-one font-semibold w-10/12 mx-auto border-b border-three mb-10 flex-col md:flex-row">
 
       {/* left side  */}
        <div className="flex-1">
          <h1 className="text-xl">
            <Link href='/tracker'>Fitness Tracker</Link>
          </h1>
        </div>

        {/* right links  */}
        {/* <div className="flex-none"> */}
          <div className="flex flex-wrap">
          <ul className="menu menu-horizontal items-center px-1 md:text-lg">
          <li className="hover:scale-110 transition-all duration-300">
              <Link href={`/tracker`}>Add Exercise</Link>
            </li>
            <li className="hover:scale-110 transition-all duration-300">
              <Link href={`/tracker/history`}>History</Link>
            </li>
            <li className="hover:scale-110 transition-all duration-300">
              <Link href={`/workout`}>Workouts</Link>
            </li>
          </ul>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TrackerNav;
