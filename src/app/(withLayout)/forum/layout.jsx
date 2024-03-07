"use client"
import ForumNavLink from "@/components/Common/ForumNavLink";
import RightSideBar from "@/components/ForumComponents/rightSideBar/RightSideBar";
import { IoChatbubblesSharp } from "react-icons/io5";
import React from "react";
import Ebanner from "@/components/Eshop/Ebanner/Ebanner";

const layout = ({ children }) => {
  return (
    <div className=''>

      <div className=' pb-8'>

        {/* <h2 className='text-primary text-center  text-4xl uppercase mx-auto w-[50%] font-light'>
          A community of People that grow together
        </h2> */}


<Ebanner image={'https://cdn.discordapp.com/attachments/1195065186080526343/1214890961767764008/IMG-20240306-WA0000.jpg?ex=65fac260&is=65e84d60&hm=d7f82b9dedf6b4c1c7276c1d51025f948990163789498bf9a1d3059f922349fd&'} heading={'Community Forum'} ></Ebanner>

        <p className='text-one text-center mx-auto w-[50%] mt-8'>
          Forums foster community, enabling diverse individuals to connect, share ideas, and collaborate, cultivating a space for meaningful interaction and collective engagement. </p>
      </div>

   

      <div className="">

      <div className="container">
  <div className="nav-wrapper mt-5 pb-5">
    <ul className="nav-list flex items-center justify-center gap-8 text-[14px] text-one lg:flex">
      <li className="nav-item hover:text-three cursor-pointer">
        <ForumNavLink href="/forum/announcement">Announcement</ForumNavLink>
      </li>
      <li className="nav-item hover:text-three  cursor-pointer">
        <ForumNavLink href="/forum/popular">Popular</ForumNavLink>
      </li>
      <li className="nav-item hover:text-three  cursor-pointer">
        <ForumNavLink href="/forum/newest">Newest</ForumNavLink>
      </li>
      <li className="nav-item hover:text-three  cursor-pointer">
        <ForumNavLink href="/forum/health">Health</ForumNavLink>
      </li>
      <li className="nav-item hover:text-three  cursor-pointer">
        <ForumNavLink href="/forum/fitness">Fitness</ForumNavLink>
      </li>
    </ul>

    <div className="  flex items-center justify-center mx-auto gap-4 lg:w-[30%] mt-8 "> 
    <ForumNavLink href="/forum/post" >
      <button className="font-medium   px-5 py-3 rounded-3xl bg-one hover:bg-three text-four  transition-all duration-500 ">
      Create Post
      </button>
      
      </ForumNavLink>

      <ForumNavLink href="/chat" >
      <button className="font-medium  w-full px-5 py-3 rounded-3xl bg-one hover:bg-three text-four  transition-all duration-500 ">
      Global Chat
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
        <div className="lg:flex  mx-auto md:w-[60%] w-full">
  <div className="w-full">
    {children}
  </div>
</div>


        <div className="lg:flex-1 w-[90%] mx-auto md:w-[60%]">

          <RightSideBar></RightSideBar>

        </div>

      </div>

    </div>
  );
};

export default layout;
