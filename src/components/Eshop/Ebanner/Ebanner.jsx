"use client";

import { fadeIn } from "@/components/Common/Animation1";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ebanner({ image, heading }) {
  return (
    <div className=" w-full">
      <div className="border relative">
        <Image
          height={5000}
          width={5000}
          src={
            image
              ? image
              : "https://img.freepik.com/premium-vector/white-flower-card-template_1639-6418.jpg?w=740"
          }
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center top-0 bg-black bg-opacity-0">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className=" text-center text-3xl md:text-5xl font-semibold text-neutral-800  w-10/12 mx-auto"
          >
            <h1> {heading}</h1>
            <h3 className="text-lg font-medium my-5 text-gray-700">
              {" "}
              <Link href="/" className="hover:text-three transition">
                Home
              </Link>{" "}
              <span>||</span> <span className="text-three">{heading}</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Ebanner;
