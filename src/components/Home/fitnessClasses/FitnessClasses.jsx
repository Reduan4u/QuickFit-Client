"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import Image from "next/image";
import LoginButton from "@/components/Common/LoginButton";
import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";

const ExerciseTracker = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col justify-center space-y-8 md:w-1/2 px-8 py-12"
          >
            <SectionHeading
              subTitle={"Start tracking today"}
              title={"Achive Fitness goal"}
            ></SectionHeading>
            <p className="text-base text-center text-gray-600 mb-4">
              Take control of your fitness journey by tracking your exercises,
              setting achievable goals, and monitoring your progress over time.
              With our exercise tracker, you will stay motivated and committed
              to leading a healthier lifestyle. Whether you are aiming to build
              strength, improve endurance, or simply stay active, our tracker
              will help you stay on track and reach your fitness goals.
            </p>
            <Link href={"/tracker"} className="w-3/4 mx-auto">
              {" "}
              <LoginButton>GET STARTED</LoginButton>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            className=" md:w-1/2"
          >
            <Image
              className="mx-auto w-full"
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/7398d9ab97d152f88615ac78/fxgtfh.jpg"
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseTracker;
