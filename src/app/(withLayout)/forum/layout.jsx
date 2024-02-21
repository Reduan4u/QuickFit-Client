"use client"
import ForumNavLink from "@/components/Common/ForumNavLink";
import RightSideBar from "@/components/ForumComponents/rightSideBar/RightSideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className='bg-[#0F172A]'>

      <div className='bg-[#131C2E] pt-8 pb-8'>

        <h2 className='text-[#7dd1fc] text-center  text-4xl uppercase mx-auto w-[50%] font-light'>
          A community of People that grow together
        </h2>

        <p className='text-[#94A3B8] text-center mx-auto w-[50%] mt-8'>
          Forums foster community, enabling diverse individuals to connect, share ideas, and collaborate, cultivating a space for meaningful interaction and collective engagement. </p>
      </div>

      <div className="">

      <div className="container">
  <div className="nav-wrapper mt-5 pb-5">
    <ul className="nav-list flex items-center justify-center gap-8 text-[14px] text-[#97a4af] lg:flex">
      <li className="nav-item hover:text-[#f2f2f2] cursor-pointer">
        <ForumNavLink href="/forum/announcement">announcement</ForumNavLink>
      </li>
      <li className="nav-item hover:text-[#f2f2f2] cursor-pointer">
        <ForumNavLink href="/forum/popular">Popular</ForumNavLink>
      </li>
      <li className="nav-item hover:text-[#f2f2f2] cursor-pointer">
        <ForumNavLink href="/forum/newest">Newest</ForumNavLink>
      </li>
      <li className="nav-item hover:text-[#f2f2f2] cursor-pointer">
        <ForumNavLink href="/forum/health">Health</ForumNavLink>
      </li>
      <li className="nav-item hover:text-[#f2f2f2] cursor-pointer">
        <ForumNavLink href="/forum/fitness">Fitness</ForumNavLink>
      </li>
    </ul>

    <div className="  flex items-center justify-center mx-auto lg:w-[10%] mt-8 "> 
    <ForumNavLink href="/forum/post" >
      <button className="text-[#fff] bg-[#6366F1] py-1 px-2 rounded-3xl ">
      Create Post
      </button>
      
      </ForumNavLink>
    </div>
  </div>
</div>


</div>

      <div class="border-t border-gray-700 my-4 mx-4"></div>

      {/* Content rendering here */}



      <div className="lg:flex items-start justify-between md: mx-auto md:w-auto">
        {/* #### only this  component is being renderd */}
        <div className="lg:flex w-[70%] mx-auto md:w-[60%] sm:w-full">
  <div className="w-full">
    {children}
  </div>
</div>


        <div className="lg:flex-1 w-[30%] mx-auto md:w-[60%]">

          <RightSideBar></RightSideBar>

        </div>

      </div>

    </div>
  );
};

export default layout;
