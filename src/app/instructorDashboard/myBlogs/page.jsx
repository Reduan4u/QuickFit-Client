import MyBlogs from "@/components/pubDashComponets/MyBlogs/MyBlogs";
import MyBlogs2 from "@/components/pubDashComponets/MyBlogs/MyBlogs2";
import React from "react";

const page = () => {
  return (
    <div className=" text-white grid gap-4 mx-4 font-tech rounded-md  ">
      <div className=" bg-[#182237] py-4 rounded-md">
        <h2 className=" text-center text-2xl  ">My Blogs</h2>
      </div>

      <div className="bg-[#182237] my-2 px-3 rounded-md">
        <MyBlogs />
      </div>
      <div className="bg-[#182237] my-2 px-3 rounded-md">
        <MyBlogs2 />
      </div>
    </div>
  );
};

export default page;
