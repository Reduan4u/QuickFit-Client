"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import LoginButton from '@/components/Common/LoginButton';
import './FreeChallenges.css'
import Link from 'next/link';
const FreeChallenges = () => {
    return (
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="featured-item bg-fixed text-white my-20">
        <div className="flex justify-center items-center gap-2 bg-black bg-opacity-60 pb-20 pt-12 px-5 md:px-10 lg:px-36 ">
            <div className="md:ml-10">
                <p className="uppercase text-2xl text-center">Free Workout Videos</p>
                <h1 className='text-4xl text-three text-center  py-4'>Get Fit & Happy</h1>
                <p className='w-10/12 text-center mx-auto text-base'>Discover a world of fitness and happiness through our extensive collection of free workout videos. Whether you are a beginner or an experienced fitness enthusiast, there is something here for everyone. Say goodbye to excuses and hello to a healthier, happier you. Start your journey today!</p>
               <div className='flex justify-center items-center pt-2'>
               <Link href='/workout'><LoginButton>Get Started</LoginButton></Link>
               </div>
            </div>
        </div>
        </motion.div>
    );
};

export default FreeChallenges;
