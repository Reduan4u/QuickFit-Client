"use client"
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Description from "./TabContent/Description";
import Quiz from "./TabContent/Quiz";
import Reviews from "./TabContent/Reviews";


const RightSide = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };
    const handleStopVideo = () => {
        setIsPlaying(false);
    };
    return (
        <div className=" w-full md:w-8/12">
            <div className="relative">
                <Image
                    height={1000}
                    width={1000}
                    alt="pp"
                    src="https://htmldemo.net/nutras/nutras/assets/images/courses/courses-details.jpg"

                />
                {!isPlaying && (
                    <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        onClick={handlePlayVideo}
                    >
                        <FaPlayCircle className="text-primary text-4xl" />
                    </button>
                )}
                <div className="absolute bottom-5 left-5 rounded-sm p-2 bg-primary text-white">
                    <span>Category</span>
                </div>
                {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/J8SFL3Z7zw4?list=PLnZgHKyxHOEAy7MisX6CSMe4JTzkeodmC"
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
            </div>
            <h1 className="font-bold text-2xl py-5">Hacking exercise for health new science of fitness.</h1>
            <div className="flex justify-between items-center pb-10">
                <div className="flex justify-start items-center gap-2">

                    <Image
                        height={1000}
                        width={1000}
                        alt="pp"
                        className="h-10 w-10 rounded-full"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <p>By: Instructor</p>
                </div>
                <p className="flex gap-2 justify-center items-center">Rating <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
                </div></p>
            </div>
            {/* Tab */}
            <Tabs>
                <TabList className="md:flex items-center justify-center bg-[#F8F6F4] py-2 gap-4 mb-4 border-none">
                    <Tab className=" w-full md:w-32 text-center rounded-full px-6 py-3 border-none bg-gray-200  transition-colors duration-300 " selectedClassName="border-none bg-primary text-white">Description</Tab>
                    <Tab className="w-full md:w-32 px-6 py-3 border-none bg-gray-200 rounded-full transition-colors duration-300 text-center" selectedClassName="border-none bg-primary text-white">Quiz</Tab>
                    <Tab className="w-full md:w-32 text-center px-6 py-3 border-none bg-gray-200 rounded-full transition-colors duration-300 " selectedClassName="border-none bg-primary text-white">Reviews</Tab>

                </TabList>

                <TabPanel>
                    <Description></Description>
                </TabPanel>
                <TabPanel>
                    <Quiz></Quiz>
                </TabPanel>
                <TabPanel>
                    <Reviews></Reviews>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default RightSide;