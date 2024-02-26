"use client";
import { AuthContext } from "@/components/Provider/AuthProvider";
import useUser from "@/hooks/useUser";
// import Image from "next/image";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";

const Profile = () => {
  const { data, role } = useUser();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <motion.h2
        variants={fadeIn("left", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" text-2xl"
      >
        Profile Details
      </motion.h2>
      <div className=" flex  mt-10 justify-center gap-5 text-xl">
        <motion.div
          variants={fadeIn("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          {/* <Image
            className=" rounded-full"
            height="90"
            width="90"
            src={user?.photoURL}
            alt="user"
          /> */}
          <img src={user?.photoURL ? user?.photoURL : "https://postimg.cc/NL1YD6fn"} className="w-52 h-44 object-cover" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2>Name : {user?.displayName ? user?.displayName : "Anonymous Person"}</h2>
          <h2>Email : {data?.email}</h2>
          <h2>Role : {role}</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
