"use client"

import { fadeIn } from "@/components/Common/Animation1";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const CBanner = ({ image, heading }) => {

    return (
        <div>
            <div className=" w-full">
                <div className="border relative">
                    <Image
                    width={1000}
                    height={500}
                    alt="Banner Image"
                        src={image ? image : "https://i.postimg.cc/g0w44N8t/top-view-desk-concept-with-tablet.jpg"}
                        className="w-full h-[50vh] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center top-0 ">
                        <motion.div
                            variants={fadeIn("right", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-primary text-center text-3xl md:text-5xl font-bold  w-10/12 mx-auto">
                            {heading ? heading : "All Courses"}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CBanner;