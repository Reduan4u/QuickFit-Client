"use client";
import DashLink from "@/components/Common/DashLink";
import Loading1 from "@/components/Loading/Loading1";
import { AuthContext } from "@/components/Provider/AuthProvider";
import React, { useContext } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Login from "@/components/Authentication/Login/Login";

const Layout = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);

  const router = useRouter();
  const handleOut = () => {
    logOut()
      .then((res) => {
        toast.success("LogOut Successfully");
        router.push("/");
      })
      .catch((err) => {
        
      });
  };

  if (loading) {
    return <Loading1></Loading1>;
  } else if (!user) {
    return <Login></Login>;
  } else if (user) {
    return (
      <div className=" md:flex bg-[#151c2c] font-roboto md:min-h-screen  ">
        <div className=" md:ml-8 md:pl-5  md:w-[20vw] w-full bg-[#182237]  rounded-lg my-4 flex space-y-2 flex-wrap md:flex-col md:pt-20 mt-10 md:space-y-12 md:text-4xl text-xs md:font-thin ">
          <DashLink icon={<MdDashboardCustomize />} href="/instructorDashboard">
            Dashboard
          </DashLink>
          <DashLink icon={<IoAddSharp />} href="/instructorDashboard/addBlogs">
            Add Blogs
          </DashLink>
          <DashLink icon={<FaBriefcase />} href="/instructorDashboard/myBlogs">
            My Blogs
          </DashLink>
          <DashLink
            icon={<SiGoogleanalytics />}
            href="/instructorDashboard/analitics"
          >
            Analytics
          </DashLink>
          <hr />

          <DashLink icon={<IoHome />} href="/">
            Home
          </DashLink>
          <button
            onClick={handleOut}
            className=" text-white flex items-center  text-xl gap-3 hover:bg-red-500 hover:text-white ml-[8px] hover:font-semibold w-48 p-2 rounded-md transition-all duration-500 "
          >
            <CiLogout className="" /> <span>LogOut</span>
          </button>
        </div>
        <div className="w-full pt-20  ">{children}</div>
      </div>
    );
  }
};

export default Layout;
