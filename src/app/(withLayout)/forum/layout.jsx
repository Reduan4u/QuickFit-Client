import ForumNavLink from "@/components/Common/ForumNavLink";
import NavLink from "@/components/Common/NavLink";
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

      <div className='mt-5 pb-5  flex items-center justify-between px-4'>
        <ul className='flex items-center justify-center gap-8 text-[14px] text-[#97a4af]'>
          <li className='hover:text-[#f2f2f2] cursor-pointer'>
            <ForumNavLink href="/forum/announcement">announcement</ForumNavLink>

          </li>

          <li className='hover:text-[#f2f2f2] cursor-pointer'>
            <ForumNavLink href="/forum/popular">Popular</ForumNavLink>

          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <ForumNavLink href="/forum/newest">Newest</ForumNavLink>

          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <ForumNavLink href="/forum/health">Health</ForumNavLink>

          </li>
          <li className='hover:text-[#f2f2f2] cursor-pointer '>
            <ForumNavLink href="/forum/fitness">Fitness</ForumNavLink>

          </li>
        </ul>

        <ForumNavLink href="/forum/post">
            <button className='bg-[#6366F1] py-1 px-2 rounded-3xl text-[#fff]'>Create Post</button>
        </ForumNavLink>
        
      </div>
      </div>

      <div class="border-t border-gray-700 my-4 mx-4"></div>

      {/* Content rendering here */}


      
      <div className="flex items-start justify-between">
                {/* #### only this  component is being renderd */}
                <div className="flex w-[70%]">
                <div className="w-full">{children}</div>

                </div>

                <div className="flex-1 w-[30%]">

                   <RightSideBar></RightSideBar>


                </div>

            </div>

    </div>
  );
};

export default layout;
