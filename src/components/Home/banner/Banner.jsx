"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

// Additional styles if needed
import "swiper/css/effect-cube";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" h-[70vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={EffectCube}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className=" w-full h-full bg-blue-950 opacity-35 absolute"></div>
          <div className=" md:text-5xl text-3xl font-bold w-full absolute flex flex-col p-6 pb-10 justify-end  text-white text-left h-full">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" md:text-3xl text-3xl font-light"
            >
              Welcome to Quick Fit
            </motion.h2>{" "}
            <motion.h2
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              The Home of Fitness
            </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" "
            src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full bg-blue-950 opacity-55 absolute"></div>
          <div className=" md:text-5xl text-3xl font-bold w-full text-left  absolute pb-10 text-white flex flex-col p-6 justify-end h-full">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" md:text-3xl text-3xl font-light"
            >
              Fell the nature
            </motion.h2>{" "}
            <motion.h2
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              Embrace the nature beauty in your heart
            </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" "
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full bg-blue-950 opacity-55 absolute"></div>
          <div className=" md:text-5xl text-3xl font-bold w-full text-left pb-10  absolute text-white flex flex-col p-6 justify-end h-full">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-3xl font-light"
            >
              Eat Healthy, Stay Healthy
            </motion.h2>{" "}
            <motion.h2
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              We have the best consultant for these
            </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" "
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full bg-blue-950 opacity-55 absolute"></div>
          <div className=" md:text-5xl text-3xl font-bold w-full text-left pb-10 absolute text-white flex flex-col p-6 justify-end h-full">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-3xl font-light"
            >
              Industry is the Key
            </motion.h2>{" "}
            <motion.h2
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              The more you embarce pain, the more you will be strong{" "}
            </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" "
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full bg-blue-950 opacity-55 absolute"></div>
          <div className=" md:text-5xl text-3xl font-bold w-full text-left pb-10 absolute text-white flex flex-col p-6 justify-end h-full">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-3xl font-light"
            >
              Control your Hunger
            </motion.h2>{" "}
            <motion.h2
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              Eat to live , Don't live to eat{" "}
            </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" "
            src="https://img.freepik.com/free-photo/box-nuts-spices-wood-table_23-2148262109.jpg?w=1380&t=st=1706191626~exp=1706192226~hmac=4a124afa8839f3eefbbe7a64f448a58116018705fd66df9ba7b8f1804e39a68d"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
