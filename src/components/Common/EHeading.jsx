"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";

const EHeading = ({ text, children, color }) => {
  return (
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <h1 class="bg-clip-text text-transparent bg-gradient-to-t from-secondary to-tertiary text-2xl md:text-5xl font-black text-center my-5">
          {children}
        </h1>
      </motion.div>
  );
};

export default EHeading;
