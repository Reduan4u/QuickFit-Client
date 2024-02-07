"use client";
import NavLink from "@/components/Common/NavLink";
import Loading1 from "@/components/Loading/Loading1";
import { AuthContext } from "@/components/Provider/AuthProvider";
import React, { useContext } from "react";

const Layout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading1></Loading1>;
  } else if (!user) {
    return <h2>Login First</h2>;
  } else if (user) {
    return (
      <div className=" md:flex bg-red-500  ">
        <div className=" md:w-[30vw] w-full flex space-y-2 flex-wrap md:flex-col md:pt-20 mt-10 md:space-y-10 md:text-3xl text-xs md:font-semibold md:h-screen">
          <NavLink href="/instructorDashboard">Publisher Dashboard</NavLink>
          <NavLink href="/instructorDashboard/addBlogs">Add Blogs</NavLink>
          <NavLink href="/instructorDashboard/myBlogs">My Blogs</NavLink>
          <NavLink href="/instructorDashboard/analitics">Analytics</NavLink>
          <hr />

          <NavLink href="/">Home</NavLink>
          <NavLink href="/logout">LogOut</NavLink>
        </div>
        <div className="w-full pt-20  ">{children}</div>
      </div>
    );
  }
};

export default Layout;
