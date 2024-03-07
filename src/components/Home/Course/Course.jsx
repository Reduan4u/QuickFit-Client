"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "@/components/Common/LoginButton";

const Course = () => {
  return (
    <div class="relative w-full mx-auto flex flex-col justify-center overflow-hidden mt-20 py-16 sm:pt-12 bg-four ">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        class="w-full items-center"
      >
        <div class="w-full md:w-10/12  mx-auto flex-row md:flex ">
          <div class="overflow-hidden m-5 md:m-10 w-full md:w-2/5  relative">
            <Image
              height={1000}
              width={1000}
              alt="picture"
              className="h-full w-full"
              src="https://htmldemo.net/nutras/nutras/assets/images/about.jpg"
            />
            <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent flex justify-center items-center  pt-32">
              <Link href="/courses" className="w-3/4">
                <LoginButton>Start course</LoginButton>
              </Link>
            </div>
          </div>

          <div className=" w-full md:w-3/5 flex justify-center items-center">
            <div class="pl-12">
              <p class="text-base font-semibold leading-7 text-one">
                25+ YEARS OF EXPERIENCE
              </p>
              <h1 class="my-5 text-5xl font-bold tracking-tight text-gray-900">
                We have expert instructor for help our students.
              </h1>
              <p class="text-base">
                Embark on a boundless journey of exploration with our expansive selection of courses, thoughtfully curated to accommodate learners of every proficiency level. Delve into the dynamic landscape of technology or immerse yourself in the captivating world of the arts—our expert instructors and adaptable schedules provide the perfect environment for your educational pursuits. Whether you are navigating the complexities of computer programming or unleashing your creativity in the visual arts, our tailored approach ensures that you can learn with confidence and flexibility, empowering you to pursue your passions with ease.

              </p>
              <p class="my-5 text-one text-2xl font-semibold">100+ Courses</p>
              <p class="text-base">
                Access flexible learning options, including self-paced online
                courses and interactive live sessions, to accommodate diverse
                schedules and preferences, ensuring you can seamlessly integrate
                learning into your busy lifestyle while receiving personalized
                guidance from experienced educators.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Course;
