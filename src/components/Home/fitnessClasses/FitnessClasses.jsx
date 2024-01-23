"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const FitnessClasses = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex flex-col justify-center space-y-5">
                        <h1 className="text-2xl underline underline-offset-8"> MEMBERSHIP </h1>
                        <h1 className="text-3xl font-bold">Membership Benefits</h1>
                        <p className="mr-16 ">A gym structured to flow, getting you in and out fast. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                        <div className="flex gap-5 "> {/* Size boro kora lagbe */}
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaYoutube /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex flex-col justify-center space-y-5">
                        <h1 className="text-center font-medium text-2xl">You will discover how easy it is to stay motivated and fit </h1>
                        <h1 className="text-center font-normal text-lg text-orange-600 underline underline-offset-2">Be Our Premium Member</h1>
                        <button className="btn bg-white border-orange-600 border-2 rounded-none w-1/3 mx-auto hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300">JOIN NOW</button>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="bg-orange-200 dark:text-neutral-50 py-24 px-6">
                        <Image
                            className="mx-auto "
                            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/7398d9ab97d152f88615ac78/fxgtfh.jpg"
                            alt="Membership Image"
                            width={400}
                            height={600}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FitnessClasses;