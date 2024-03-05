"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
// import Image from "next/image";
import { AuthContext } from "@/components/Provider/AuthProvider";
import useUser from "@/hooks/useUser";
import RealityChart from "@/components/manage products dash/RealityChart";

const AdminMain = () => {
    const { data, role } = useUser();
    console.log(data);
    const { user } = useContext(AuthContext);

    return (
        <div className="grid font-tech rounded-md w-full h-[65%] text-white  gap-5 grid-cols-4 grid-rows-10 px-3">

            {/* Header */}
            <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" bg-[#182237] col-span-4 rounded-md p-4 row-span-2"
            >
                <div className="flex items-center justify-between">


                    {/*<!-- Search Input -->*/}
                    <div className="flex justify-center">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="search" placeholder="Search"
                                className="form-input px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                            <span
                                className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mt-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className=" text-center text-3xl font-black  ">
                            Admin Dashboard
                        </h2>
                    </div>

                    <ul className="flex items-center flex-shrink-0 space-x-6">

                        {/*<!-- Notifications menu -->*/}
                        <li className="relative">
                            <button
                                className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
                                /* @click="toggleNotificationsMenu" @keydown.escape="closeNotificationsMenu" */
                                aria-label="Notifications" aria-haspopup="true">
                                <div className="flex items-cemter">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                {/*  <!-- Notification badge -->*/}

                                <span aria-hidden="true"
                                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800">

                                </span>
                            </button>
                            <template x-if="isNotificationsMenuOpen">
                                <ul /* x-transition:leave="transition ease-in duration-150"
                                    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" */
                                    /* @click.away="closeNotificationsMenu" @keydown.escape="closeNotificationsMenu" */
                                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md">
                                    <li className="flex">
                                        <a className="text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                            href="#">
                                            <span>Messages</span>
                                            <span
                                                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                                13
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </template>
                        </li>

                        {/*<!-- Profile menu -->*/}
                        <li className="relative">
                            <button
                                className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
                               /*  @click="toggleProfileMenu" @keydown.escape="closeProfileMenu"  */ aria-label="Account"
                                aria-haspopup="true">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </button>
                            <template x-if="isProfileMenuOpen">
                                <ul /* x-transition:leave="transition ease-in duration-150"
                                    x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" */
                                    /* @click.away="closeProfileMenu" @keydown.escape="closeProfileMenu" */
                                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md"
                                    aria-label="submenu">
                                    <li className="flex">
                                        <a className=" text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                            href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a className="text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                            href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Log out</span>
                                        </a>
                                    </li>
                                </ul>
                            </template>
                        </li>
                    </ul>
                </div>
            </motion.div>


            {/* Top cards */}

            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-4 rounded-md  text-xl flex gap-6 ">
                <a className="transform w-full  hover:scale-105 transition duration-300 shadow-xl rounded-lg intro-y"
                    href="#">
                    <div className="p-5">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <div
                                className="bg-green-500 rounded-full h-6 px-4 flex justify-items-center text-white font-semibold text-sm">
                                <span className="flex items-center">40%</span>
                            </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">$11,510</div>

                                <div className="mt-1 text-base">Product Sales</div>
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-4 rounded-md  text-xl flex gap-6 ">                <a className="transform w-full  hover:scale-105 transition duration-300 shadow-xl rounded-lg intro-y"
                    href="#">
                    <div className="p-5">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div
                                className="bg-red-600 rounded-full h-6 px-4 flex justify-items-center text-white font-semibold text-sm">
                                <span className="flex items-center">15%</span>
                            </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">$1,510</div>

                                <div className="mt-1 text-base">Book Sales</div>
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-4 rounded-md  text-xl flex gap-6 ">                <a className="transform w-full  hover:scale-105 transition duration-300 shadow-xl rounded-lg intro-y"
                    href="#">
                    <div className="p-5">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                            <div
                                className="bg-yellow-500 rounded-full h-6 px-4 flex justify-items-center text-white font-semibold text-sm">
                                <span className="flex items-center">10%</span>
                            </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">$2,510</div>

                                <div className="mt-1 text-base">Plan Sales</div>
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-4 rounded-md  text-xl flex gap-6 ">                <a className="transform w-full  hover:scale-105 transition duration-300 shadow-xl rounded-lg intro-y"
                    href="#">
                    <div className="p-5">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <div
                                className="bg-blue-500 rounded-full h-6 px-4 flex justify-items-center text-white font-semibold text-sm">
                                <span className="flex items-center">30%</span>
                            </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">$4,510</div>

                                <div className="mt-1 text-base">Service Sales</div>
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>

            {/* profile Details */}
            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-10 rounded-md p-3 col-span-4">

                <div>
                    <motion.h2
                        variants={fadeIn("left", 0.9)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className=" text-2xl"
                    >
                        Profile Details
                    </motion.h2>
                    <div className=" flex  mt-10 justify-center gap-5 text-xl">
                        <motion.div
                            variants={fadeIn("right", 0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            {/* <Image
                                className=" rounded-full"
                                height="90"
                                width="90"
                                src={user?.photoURL}
                                alt="user"
                            /> */}
                            <img src={data?.image} className="w-52 h-44 object-cover" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <h2>Name : {user?.displayName ? user?.displayName : "Anonymous Person"}</h2>
                            <h2>Email : {data?.email}</h2>
                            <h2>Role : {role}</h2>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/*  */}
            <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="bg-[#182237] row-span-10 rounded-md p-3 col-span-4">
                <div className="">
                    <h2 className="text-2xl font-semibold tracking-wide text-center mb-5">
                        Monthly Reach VS Expectation
                    </h2>
                    <RealityChart />
                </div>
            </motion.div>


        </div >
    );
};

export default AdminMain;