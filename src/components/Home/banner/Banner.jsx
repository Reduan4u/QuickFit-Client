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
    <div className="h-[60vh] m-auto">

      {<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={EffectCube}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className=" md:text-5xl text-3xl md:w-11/12 mx-auto font-bold  text-left  absolute  text-white flex flex-col pl-40 justify-center h-full">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-7xl  text-primary font-bold"
            >
              <span className="text-9xl">QuickFit </span> <br />for Your <span className="text-one"> Health,</span><br />Not Only <span className="text-one"> Fitness.</span>
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black text-2xl pt-4"
            >
              It has survived not only five Centuries but also Generations           </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" -mt-24"
            src="https://htmldemo.net/nutras/nutras/assets/images/slider/slider-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:text-5xl text-3xl md:w-11/12 mx-auto font-bold  text-left  absolute text-white flex flex-col pl-40 justify-center h-full">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-7xl text-primary font-bold"
            >
              <span className="text-9xl">QuickFit </span> <br />for Your <span className="text-one"> Health,</span><br />Not Only <span className="text-one"> Fitness.</span>
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black text-2xl pt-4"
            >
              It has survived not only five Centuries but also Generations           </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" -mt-24"
            src="https://htmldemo.net/nutras/nutras/assets/images/slider/slider-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:text-5xl text-3xl md:w-11/12 mx-auto font-bold  text-left  absolute text-white flex flex-col pl-40 justify-center h-full">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-7xl text-primary font-bold"
            >
              <span className="text-9xl">QuickFit </span> <br />for Your <span className="text-one"> Health,</span><br />Not Only <span className="text-one"> Fitness.</span>
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black text-2xl pt-4"
            >
              It has survived not only five Centuries but also Generations           </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" -mt-24"
            src="https://htmldemo.net/nutras/nutras/assets/images/slider/slider-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:text-5xl text-3xl md:w-11/12 mx-auto font-bold  text-left  absolute  text-white flex flex-col pl-40 justify-center h-full">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-7xl text-white text-right font-bold"
            >
              <span className="text-9xl">QuickFit </span> <br />For Your <span className="text-two"> Health,</span><br />Not Only <span className="text-one"> Fitness.</span>
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-2xl pt-4 text-right"
            >
              It has survived not only five Centuries but also Generations           </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" -mt-24"
            src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:text-5xl text-3xl md:w-11/12 mx-auto font-bold  text-left  absolute text-white flex flex-col pl-40 justify-center h-full">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-7xl text-white font-bold text-right mt-40"
            >
              <span className="text-9xl">QuickFit </span> <br />for Your <span className="text-three"> Health,</span><br />Not Only <span className="text-three"> Fitness.</span>
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-white text-2xl pt-4 text-right"
            >
              It has survived not only five Centuries but also Generations           </motion.h2>
          </div>
          <Image
            height={1080}
            width={1920}
            className=" -mt-24"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>





      </Swiper>}

      {/* <AutoplaySlider play={true} cancelOnInteraction={false} interval={100000}>

        <div className="relative" style={{ backgroundImage: 'url(https://htmldemo.net/nutras/nutras/assets/images/slider/slider-1.jpg)', backgroundSize: ' auto' }}>
          <div className="text-container">
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" text-7xl text-primary font-bold"
            >
              Fell the nature
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className=" text-2xl"
            >
              Embrace the nature beauty in your heart
            </motion.h2>
          </div>
        </div>


        <div className="relative" style={{ backgroundImage: 'url(https://htmldemo.net/nutras/nutras/assets/images/slider/slider-2.jpg)', backgroundSize: 'cover' }}>
          <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:px-24 md:px-20 px-4 my-10'>
            <div className="lg:flex-1 md:flex-1 flex flex-col justify-center items-center lg:items-start md:items-start text-center lg:text-start md:text-start ">
              <h1 className="mb-1 md:mb-5 lg:mb-5 text-sm sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">BBQ Chicken <strong className='text-red-600'>Salad</strong> with Creamy Avocado</h1>
              <motion.h2
                variants={fadeIn("right", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=""
              >
                BBQ Chicken Salad with Creamy Avocado
              </motion.h2>
            </div>
          </div>
        </div>
        <div data-src="/path/to/image-2.jpg" />
      </AutoplaySlider> */}
    </div>
  );
};

export default Banner;
