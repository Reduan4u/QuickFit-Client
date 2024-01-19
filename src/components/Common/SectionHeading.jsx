"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../Common/Animation1";


const SectionHeading = ({title,color}) => {
    return (
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
>
    <h2 className={` my-10 md:text-5xl text-2xl font-bold mx-5 text-${color}-800`}> <span className=' font-extrabold text-red-800'>|</span> {title}</h2>
</motion.div>
        
           
        
    );
};

export default SectionHeading;