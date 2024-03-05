"use client"
import SectionHeading from '@/components/Common/SectionHeading';
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import React from 'react';
import Lottie from 'lottie-react';
import dietPlan from "../../../../public/dietPlan.json";
import Image from 'next/image';
import Link from 'next/link';
import Button1 from '@/components/Common/Button1';
import Ebutton from '@/components/Common/Ebutton';
import Ebutton2 from '@/components/Common/Ebutton2';
import { Button } from '@mui/material';


const DietPlan = () => {
    return (
        <div
            className="w-3/4 mx-auto my-16 px-2">
            <div>
                <div>
                    <SectionHeading title={"Special Diet Plans!"} subTitle={"Work on Yourself by"}></SectionHeading>
                </div>
                {/* <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className='w-36'>
                    <Lottie animationData={dietPlan} loop={true} />
                </motion.div> */}
            </div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>

                {/* 1st div */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}

                >
                    <div
                        className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-200">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">

                            <Image
                                height={500}
                                width={500}
                                alt='types'
                                objectFit="cover"
                                src={"https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                className="w-full h-full"
                            />

                        </div>
                        <div>
                            <div className="p-6 bg-one text-white opacity-95 text-center">
                                <h4 className="font-extrabold block font-sans  lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                                    WEIGHT LOSS
                                </h4>
                                <h6>7 DAYS DIET PLAN</h6>
                            </div>
                            <div className='p-6 bg-three opacity-85 text-black  text-center'>
                                <h2 className='font-extrabold block font-sans lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900'>$150</h2>
                            </div>
                            <div className='text-center p-6 text-gray-600'>
                                <h1>2 Meetings</h1>
                                <h1>Customized to your needs</h1>
                                <h1>Lose excess weight</h1>
                                <h1>1 Follow up</h1>
                            </div>
                            <div className='text-center p-6'>
                                <Link href={"/Diet-Plans/Weight-Loss"} >
                                    <Button1 className="" title={"SEE DETAILS..."} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2nd div */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}

                ><div
                    className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-200">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                height={500}
                                width={500}
                                alt='types'
                                objectFit="cover"
                                src={"https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                className="w-full h-full"
                            />
                        </div>
                        <div>
                            <div className="p-6 bg-one text-white opacity-95 text-center">
                                <h4 className="font-extrabold block font-sans lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                                    POST PREGNANCY

                                </h4>
                                <h6>SIX MONTHS DIET & EXERCISE PLAN</h6>
                            </div>
                            <div className='p-6 bg-three opacity-85 text-black  text-center'>
                                <h2 className='font-extrabold block font-sans lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900'>$250 <span className='text-xl font-medium'>/Week</span></h2>
                            </div>
                            <div className='text-center p-6 text-gray-600'>
                                <h1>Special Diet</h1>
                                <h1>Excercise Yoga Plan</h1>
                                <h1>Weekly meetings</h1>
                                <h1>Breast Feeding Sessions</h1>
                            </div>
                            <div className='text-center p-6'>
                                <Link href={"/Diet-Plans/Post-Pregnancy"} >
                                    <Button1 className="" title={"SEE DETAILS..."} />
                                </Link>

                            </div>
                        </div>
                    </div></motion.div>


                {/* 3rd div */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}

                >
                    <div
                        className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-200">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">

                            <Image
                                height={500}
                                width={500}
                                alt='types'
                                objectFit="cover"
                                src={"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                className="w-full h-full"
                            />

                        </div>
                        <div>
                            <div className="p-6 bg-one text-white opacity-95 text-center">
                                <h4 className="font-extrabold block font-sans lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                                    FITNESS
                                </h4>
                                <h6>FOUR WEEKS MEAL & RUNNING PLAN</h6>
                            </div>
                            <div className='p-6 bg-three opacity-85 text-black  text-center'>
                                <h2 className='font-extrabold block font-sans lg:text-4xl md:text-2xl text-xl antialiased leading-snug tracking-normal text-blue-gray-900'>$350 <span className='text-xl font-medium'>/Month</span>
                                </h2>
                            </div>
                            <div className='text-center p-6 text-gray-600'>
                                <h1>Affordable</h1>
                                <h1>Preventive Care</h1>
                                <h1>Diagnostic Tests</h1>
                                <h1>Skilled Nursing Care</h1>
                            </div>
                            <div className='text-center p-6'>
                                <Link href={"/Diet-Plans/Fitness"} >
                                    <Button1 className="" title={"SEE DETAILS..."} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div >
    );
};

export default DietPlan;