import AddBlogs from "@/components/pubDashComponets/AddBlogs/AddBlogs";
import React from "react";

const page = () => {
  return (
    <div className=" grid gap-4 mx-4 font-tech  text-white">
      <div className=" bg-[#182237] py-4 rounded-md">
        <h2 className=" text-center text-2xl ">Add Blogs</h2>
      </div>
      <div className=" bg-[#182237]">
        <AddBlogs />
      </div>
    </div>
  );
};

export default page;
