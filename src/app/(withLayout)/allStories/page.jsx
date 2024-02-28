"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/Common/Animation1";
import Image from 'next/image';
import { FaArrowRight, FaUser } from "react-icons/fa";
import Link from 'next/link';
const page = async() => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/newStories", {
    cache: "no-store"
  });
  const data = await res.json();
    return (
        <div>
            <div  className=' text-center my-9'>
                <motion.h2 variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} className=' text-green-800 text-5xl font-bold'>Stories of Life</motion.h2>
                <motion.p variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} className=' text-xl font-medium text-orange-400'>Stories that will motivate you to start a new journey</motion.p>
                </div>

                <div>
                    {
                        data.map((story,index) => <motion.div 
                        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
                        key={index} className=' flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg my-4 bg-green-800 '>
                            <Image
                            height={"300"}
                            width={"400"}
                             src={story.img} alt="story" />
                            <div>
                                <div className='top flex flex-row justify-between mx-4 my-2 font-semibold text-yellow-500'>
                                    <div>
                                        #{story.category.toLowerCase().replace(/\s+/g, '_')}
                                    </div>
                                    <div>
                                       {story.date}
                                    </div>
                                </div>
                                <div className=' middle mx-4 my-5'>
                                    
                                        <h2 className=' title text-2xl   text-white'>{story.title}</h2>
                                        <p className=' text-white/60 w-[53vw]'>{story.description}</p>

                                   

                                </div>

                                <div className=' bottom flex justify-between mx-2  text-yellow-500 pb-3 md:mt-10'>
                                    <div className='author flex flex-col justify-center items-center '>
                                        <FaUser className=' text-2xl'/>
                                        <p className=' mx-2 font-bold '>{story.author}</p>

                                    </div>
                                    <div className=' '>
                                        <Link href={`/allStories/${story._id}`}><button className=' btn btn-primary hover:bg-yellow-500 hover:text-white transition-all duration-500 text-green-500 rounded-none bg-white flex justify-center items-center gap-3'><span>Read More</span> <FaArrowRight/> </button></Link>
                                        
                                    </div>

                                </div>

                            </div>

                        </motion.div>)
                    }
                </div>
        </div>
    );
};

export default page;