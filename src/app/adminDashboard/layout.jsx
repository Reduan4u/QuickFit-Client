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
      <div className=" md:flex  bg-red-500  ">
        <div className=" md:w-[20vw] w-full flex space-y-2 flex-wrap md:flex-col md:pt-20 mt-10 md:space-y-10 md:text-3xl text-xs md:font-semibold md:h-screen">
          <NavLink href="/adminDashboard">Admin Dashboard</NavLink>
          <NavLink href="/adminDashboard/users">User Details</NavLink>
          <NavLink href="/adminDashboard/blogs">Blogs</NavLink>
          <NavLink href="/adminDashboard/analytics">Analytics</NavLink>

          <hr />

          <NavLink href="/">Home</NavLink>
          <NavLink href="/logout">LogOut</NavLink>
        </div>
        <div className="w-full pt-20 bg-white  ">{children}</div>
      </div>
    );
  }
};

export default Layout;
