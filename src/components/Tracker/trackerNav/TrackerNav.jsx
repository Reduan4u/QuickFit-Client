import Link from "next/link";
import React from "react";

const TrackerNav = () => {
  return (
    <div>
      <div className="navbar text-secondary font-semibold w-10/12 mx-auto border-b border-primary mb-10">
        <div className="flex-1">
          <h1 className="text-xl">
            <Link href='/tracker'>Fitness Tracker</Link>
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal items-center px-1 md:text-lg">
            <li className="hover:scale-110 transition-all duration-300">
              <Link href={`/tracker/history`}>History</Link>
            </li>
            <li className="hover:scale-110 transition-all duration-300">
              <Link href={`/workout`}>Workouts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackerNav;
