"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import LoginButton from "@/components/Common/LoginButton";
import UseCourses from "@/hooks/UseCourses";
import { FaBook, FaCertificate, FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import Swal from "sweetalert2";

const LeftSide = ({ category }) => {
  const { refetch, isPending, courses } = UseCourses();
  // console.log(category)
  const course = courses?.find((item) => item?.category == category);

  const handleCertificate = () => {
    console.log("clicked");
    Swal.fire({
      icon: "error",
      title: `Not eligible for the certificate`,
      text: `Not eligible for the certificate`,
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-four rounded-sm w-full md:w-2/6 p-8"
    >
      <h1 className="font-bold text-3xl text-one text-center py-5">
        ${course?.price}
      </h1>
      <div className="flex justify-between items-center border-y-2 py-3">
        <p className="flex justify-center items-center gap-2">
          <FaUser className="text-three" />
          Instructor
        </p>
        <p>{course?.courseProvider}</p>
      </div>
      <div className="flex justify-between items-center py-3">
        <p className="flex justify-center items-center gap-2">
          <FaClock className="text-three" />
          Duration
        </p>
        <p>{course?.courseDuration} min</p>
      </div>
      <div className="flex justify-between items-center border-y-2 py-3">
        <p className="flex justify-center items-center gap-2">
          <SiLevelsdotfyi className="text-three" />
          Level
        </p>
        <p>{course?.level}</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-3">
        <p className="flex justify-center items-center gap-2">
          <FaBook className="text-three" />
          Language
        </p>
        <p>English</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-3">
        <p className="flex justify-center items-center gap-2">
          <FaCertificate className="text-three" />
          Certificate
        </p>
        <p>Yes</p>
      </div>
      <div onClick={handleCertificate} >
        <LoginButton>Certificate</LoginButton>
      </div>
    </motion.div>
  );
};

export default LeftSide;
