"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../Common/Animation1";

const SectionHeading = ({ title, subTitle, color, text1 }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="my-10"
    >
      <div className="flex justify-center items-center">
        <div
          className="text-center capitalize"
          style={{
            backgroundImage: `url('https://htmldemo.net/nutras/nutras/assets/images/shape/shape-3.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          <h3 className="text-one mb-3 font-medium md:text-lg">
            {subTitle ? subTitle : "Grow Your Health"}
          </h3>
          <h1 className="text-3xl font-medium  md:text-5xl">{title}</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
