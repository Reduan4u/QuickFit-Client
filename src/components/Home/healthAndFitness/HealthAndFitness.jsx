"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HealthAndFitness = async () => {
  const res = await fetch(
    "https://quick-fit-server.vercel.app/api/v1/category",
    {
      cache: "no-store",
    }
  );
  const category = await res.json();
  return (
    <div className="w-10/12 mx-auto my-2 px-2">
      <SectionHeading title={"Health and Fitness Category"}></SectionHeading>

      <div className="grid md:grid-cols-6 grid-cols-1 gap-2 ">
        {category.map((type, index) => (
          <Link
            href={`category/${type?.category}`}
            className={`${
              index === 2 && "md:col-span-2 md:row-span-2 h-full w-full"
            } ${index === 3 && "md:col-span-2 md:row-span-2 h-full w-full"} ${
              index === 4 && "md:col-span-2 md:row-span-2 h-full w-full"
            } ${
              index === 5 && "md:col-span-3 md:row-span-2 h-full w-full"
            } hover:scale-95 transition-all duration-700 hover:border-yellow-300 hover:border-5 hover:z-40 cursor-pointer`}
            key={index}
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              className="relative w-full h-full "
            >
              <Image
                height={500}
                width={500}
                alt="types"
                objectFit="cover"
                src={type?.image}
                className="w-full h-full "
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <p className="hover:text-primary text-white text-xs md:text-sm lg:text-2xl font-bold">
                  {type?.category}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HealthAndFitness;
