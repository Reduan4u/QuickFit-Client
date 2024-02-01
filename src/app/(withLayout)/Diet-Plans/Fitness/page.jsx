"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../../../components/Common/Animation1";
import Title from "@/components/Common/Title";
import Image from "next/image";
import "./page.css"
import Link from "next/link";

const page = () => {
    return (
        <div>
            <div className="h-96 relative">
                <Image
                    alt='types'
                    layout="fill"
                    objectFit="cover"
                    src={"https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/Sports_Nutrition.jpg"
                    }
                    className="w-full h-full"
                />
            </div>
            <div>
                <div className="bg-green-800 opacity-95 py-5">
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}>                        <h1 className="w-2/3 mx-auto text-white md:text-5xl text-2xl font-bold">Work With Me
                        </h1>
                        <h1 className="w-2/3 mx-auto px-5 text-white text-xl">Achieve your health and fitness goals through individually tailored expert guidance</h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 w-2/3 mx-auto gap-10 my-10">
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}>                        <h1 className="text-4xl">Personal Session</h1>
                        <h1 className="text-lg">Overall Wellness Coaching</h1>
                        <p className="mt-10 text-gray-600 text-justify">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <button className="more-btn mt-10">LEARN MORE...</button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}>                        <Image
                            height={5000}
                            width={5000}
                            alt='types'
                            objectFit="cover"
                            src={"https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/success-story-person.jpg"
                            }
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 w-2/3 mx-auto gap-10 my-10">
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}>
                        <Image
                            height={5000}
                            width={5000}
                            alt='types'
                            objectFit="cover"
                            src={"https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/group-sessions.jpg"
                            }
                            className="w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}>
                        <h1 className="text-4xl">Group Session</h1>
                        <h1 className="text-lg text-gray-700">Get each other motivated</h1>
                        <p className="mt-10 text-gray-600 text-justify">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <button className="more-btn mt-10">LEARN MORE...</button>
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <Link href={`/Diet-Plans/orderForm2/${350}`}>
                        <button className="button">
                            Book Now
                            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                <path
                                    clip-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </Link>

                </div>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-20 mb-10">
                    <Title heading={"You will also participate in several activities…"} subHeading={"...to get each other motivated!"} ></Title>
                </motion.div>


                <div className="grid grid-cols-2 mt-10">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Image
                            height={5000}
                            width={5000}
                            alt='types'
                            objectFit="cover"
                            src={"https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/wellness-events.jpg"
                            }
                            className="w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className=" flex flex-col justify-center px-10 bg-pink-800 text-white">
                        <h1 className="text-4xl">Wellness Events</h1>
                        <h1 className="text-lg ">Dig deeper and learn</h1>
                        <p className="mt-10 text-justify ">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <button className="btn btn-warning mt-10 w-1/4">LEARN MORE</button>
                    </motion.div>
                </div>

            </div>
        </div >
    );
};

export default page;