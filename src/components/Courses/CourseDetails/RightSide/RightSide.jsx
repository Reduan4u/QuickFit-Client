"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import Image from "next/image";
import { useState } from "react";
import { FaPlay, FaPlayCircle } from "react-icons/fa";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Description from "./TabContent/Description";
import Quiz from "./TabContent/Quiz";
import Reviews from "./TabContent/Reviews";
import UseCourseDetails from "@/hooks/UseCourseDetails";

const RightSide = ({ category }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isPending, allCourseDetails } = UseCourseDetails();
  const course = allCourseDetails?.find((itm) => itm.category == category);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  const handleStopVideo = () => {
    setIsPlaying(false);
  };

  const tabClass = 'font-medium bg-one rounded-3xl px-6 py-3 hover:bg-three hover:text-black text-four focus:rounded-3xl transition-all duration-500 focus:bg-three  focus:text-black focus:border-three cursor-pointer'


  return (
    <div className=" w-full md:w-8/12">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="relative"
      >
        <Image height={1000} width={1000} alt="pp" src={course?.titleImage} />
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={handlePlayVideo}
          >
            <FaPlay className="text-white rounded-full bg-three p-4 text-6xl" />
          </button>
        )}
        <div className="absolute bottom-5 left-5 rounded-sm p-2 bg-three text-white">
          <span>{category}</span>
        </div>
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src={course?.courseVideo}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-black"
              onClick={handleStopVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </motion.div>
      <h1 className="font-bold text-3xl py-5">{course?.title}</h1>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="flex justify-between items-center pb-10"
      >
        <div className="flex justify-start items-center gap-2">
          <Image
            height={1000}
            width={1000}
            alt="pp"
            className="h-10 w-10 rounded-full"
            src={course?.providerImg}
          />
          <p>By: {course?.courseProvider}</p>
        </div>
        <p className="flex gap-2 justify-center items-center">
          Rating{" "}
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-three"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-three"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-three"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-three"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-three"
            />
          </div>
        </p>
      </motion.div>
      {/* Tab */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <Tabs  selectedTabClassName={tabClass}>
          <TabList className='text-center flex flex-wrap justify-center items-center gap-5 lg:gap-10'>
            <Tab className={tabClass} >Description</Tab>
            <Tab className={tabClass} >Quiz</Tab>
            <Tab className={tabClass} >Reviews</Tab>
          </TabList>

          <TabPanel>
            <Description course={course}></Description>
          </TabPanel>
          <TabPanel>
            <Quiz course={course}></Quiz>
          </TabPanel>
          <TabPanel>
            <Reviews course={course}></Reviews>
          </TabPanel>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default RightSide;
