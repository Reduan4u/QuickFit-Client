
"use client"

import { fadeIn } from "@/components/Common/Animation1";
import { motion} from "framer-motion";
import React from "react";

function Ebanner({image , heading}) {
  return (
    <div className=" w-full">
      <div className="border relative">
        <img
          src={image? image : "https://img.freepik.com/premium-photo/medical-set-with-pills_96930-628.jpg?size=626&ext=jpg&ga=GA1.1.768728121.1705936923&semt=ais"}
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center top-0 bg-black bg-opacity-50">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white text-3xl md:text-5xl font-bold  w-10/12 mx-auto">
            {heading? heading : "QuickFit E-Shop"}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Ebanner;
