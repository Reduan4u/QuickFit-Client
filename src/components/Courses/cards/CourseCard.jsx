"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const {
    image,
    price,
    courseProvider,
    courseTitle,
    courseDuration,
    category,
    level,
  } = course;
  return (
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0 }}
    className=" max-w-md w-full shadow-md">
      <div className="relative">
      <Link href={`/courses/${category}`}>
        <Image
          height={1000}
          width={1000}
          alt="Banner Profile"
          src={image}
          className="w-full rounded-none h-52"
        />
        </Link>
        <div className="absolute bg-one text-xl text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-extrabold border-white">
          ${price}
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-700 text-base mt-5 "><span className="text-gray-400">By:</span> {courseProvider}</p>
        <Link href={`/courses/${category}`}>
          <p className="text-2xl font-medium mt-3 hover:text-three">
            {courseTitle}
          </p>
        </Link>

        <div className="flex justify-start gap-5 items-center pt-2 font-bold">
          <li className="list-inside list-disc text-three hover:underline text-base">
            {courseDuration}min
          </li>
          {/* <p className="text-three">#{category}</p> */}
          <p className="text-three hover:underline text-base">Level: {level}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
