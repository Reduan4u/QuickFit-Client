"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../../../components/Common/Animation1";
import Title from "@/components/Common/Title";
import Image from "next/image";
import "./page.css"
import Link from "next/link";
import Button1 from "@/components/Common/Button1";
import Ebanner from "@/components/Eshop/Ebanner/Ebanner";

const page = () => {
    return (
        <div>

            <div><Ebanner image={"https://img.freepik.com/free-photo/modern-sport-composition-with-template_23-2148000566.jpg?t=st=1709658957~exp=1709662557~hmac=d910b3cb2deeef7a419f0cc72162548e1b50bc150f6c76ffddee79375c0409e2&w=740"} heading={"Post-Pregnancy"}></Ebanner>
            </div>
            <div>
                <div className="bg-primary opacity-95 py-5">
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
                        <h1 className="w-2/3 mx-auto text-black md:text-5xl text-xl font-bold">Work With Me
                        </h1>
                        <h1 className="w-2/3 mx-auto px-5 text-black md:text-xl text-base">Achieve your health and fitness goals through individually tailored expert guidance</h1>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1  md:10/12 lg:4/6 w-10/12  mx-auto gap-10 my-10">
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
                        <h1 className="text-4xl">Personal Session</h1>
                        <h1 className="text-lg text-gray-700">Overall Wellness Coaching</h1>
                        <p className="my-10 text-gray-600 text-justify">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <Button1 className="" title={"LEARN MORE..."} />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
                        <Image
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

                <div className="grid md:grid-cols-2 grid-cols-1 md:10/12 lg:4/6 w-10/12  mx-auto gap-10 my-10">
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
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
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
                        <h1 className="text-4xl">Group Session</h1>
                        <h1 className="text-lg text-gray-700">Get each other motivated</h1>
                        <p className="my-10 text-gray-600 text-justify">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <Button1 title={"LEARN MORE..."} />
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <Link href={`/Diet-Plans/orderForm2/${250}`}>
                        <button className="button">
                            Book Now
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
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
                    viewport={{ once: false, amount: 0 }}
                    className="mt-20 mb-10">
                    <Title heading={"You will also participate in several activities…"} subHeading={"...to get each other motivated!"} ></Title>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 md:w-full w-10/12 m-auto mt-10">
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
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
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                        className=" flex flex-col justify-center px-10 py-5 bg-one text-white">
                        <h1 className="text-4xl">Wellness Events</h1>
                        <h1 className="text-lg ">Dig deeper and learn</h1>
                        <p className="mt-10 text-justify ">Sed lobortis turpis quis ante lacinia faucibus. Ut ullamcorper eu ipsum in porttitor. Aenean aliquam, lorem vitae efficitur maximus, neque turpis tincidunt odio, et fermentum erat erat nec orci. Vivamus hendrerit lorem eu ligula pellentesque, a feugiat nunc tristique. Sed sit amet aliquam lorem, nec tempor diam. Pellentesque eu augue nec metus pharetra pretium sit amet quis magna. Maecenas sed consequat odio. Mauris bibendum nisl sit amet.</p>
                        <Link href='/Diet-Plans/Fitness' className="mt-10 md:w-1/4 w-1/2">
                            <Button1 className="" title={"LEARN MORE..."} />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </div >
    );
};

export default page;