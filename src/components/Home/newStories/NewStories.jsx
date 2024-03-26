"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";
import Image from "next/image";

const NewStories = async () => {
  const res = await fetch(
    "https://quick-fit-server.vercel.app/api/v1/newStories",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const slicedData = data.slice(0, 5);

  return (
    <div className="w-10/12 mx-auto my-2 px-2">
      <div>
        <SectionHeading title={"New Stories"} />
        {/* <Link href="/allStories">
          <Button1 title={"See All"} />
        </Link> */}
      </div>

      <div className=" grid md:grid-cols-4 grid-cols-1  md:gap-2 gap-y-2  ">
        {slicedData.map((story, index) => (
          <Link
            className={`${index === 0 && "col-span-2 row-span-2 h-full w-full"
              } hover:bg-one transition-all duration-700 hover:border-yellow-300 hover:border-5 hover: cursor-pointer`}
            href={`/allStories/${story._id}`}
            key={index}
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <div className="relative overflow-hidden rounded-none">
                <figure>
                  <img
                    className={`rounded-none `}
                    src={story.img}
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 py-4 bg-black bg-opacity-60 text-white hover:bg-one transition-all duration-300">
                  <h2 className="text-2xl font-semibold">{story.title}</h2>
                  <p className=" text-sm text-four">
                    {story.description}
                  </p>
                  <p className=" text-three">
                    <span className="font-bold">|</span> {story.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewStories;
