"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../Common/Animation1";


const SectionHeading = ({title,color, text1}) => {
    return (
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
>
    <h2 className={` my-10 md:text-5xl text-2xl font-bold text-${color}-800`}> <span className=' font-extrabold text-primary'>|</span> <span className={text1}>{title}</span> </h2>
</motion.div>
        
           
        
    );
};

export default SectionHeading;