"use client";
import React from "react";
import { MdPostAdd } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import TotalLikes from "@/components/pubDashComponets/TotalLikes/TotalLikes";
import TotalComment from "@/components/pubDashComponets/TotalComment/TotalComment";
import TotalPost from "@/components/pubDashComponets/TotalPost/TotalPost";
import Profile from "@/components/pubDashComponets/Profile/Profile";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";

const Main = () => {
  return (
    <div className="grid font-tech rounded-md w-full   h-[65%] text-white  gap-5 grid-cols-1 md:grid-cols-3 grid-rows-10 px-3">
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" bg-[#182237] col-span-3 rounded-md p-2 row-span-2"
      >
        <h2 className=" text-center text-2xl font-black pt-2 ">
          Publisher Dashboard
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-[#182237] row-span-4 rounded-md px-8 py-5  text-xl flex gap-6 "
      >
        <span className=" text-3xl ">
          <MdPostAdd />
        </span>
        <div>
          <TotalPost />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" bg-[#182237]  row-span-4 rounded-md  px-8 py-5  text-xl flex gap-6  "
      >
        <span className=" text-3xl">
          <BiSolidLike />
        </span>
        <div>
          <TotalLikes />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-[#182237] row-span-4 rounded-md px-8 py-5  text-xl flex gap-6"
      >
        <span>
          <FaComment />
        </span>
        <div>
          <TotalComment />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-[#182237] row-span-10 rounded-md p-3 col-span-3"
      >
        <div className=" ">
          <Profile />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-[#182237] row-span-10 rounded-md p-3 col-span-3"
      >
        <h2 className=" text-2xl">Statistics</h2>
        <div>
          <h2 className=" text-center">Coming Soon</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
