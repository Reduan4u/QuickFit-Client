"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const JanuaryPicks = async () => {
  const res = await fetch(
    "https://quick-fit-server.vercel.app/api/v1/monthlyPicks",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const currentDate = new Date();
  const currentMonthNumber = currentDate.getMonth();

  const filteredData = data.filter(
    (picks) => Number(picks.date.split("-")[1]) === currentMonthNumber + 1
  );
  const slicedData = filteredData.slice(0, 4);

  return (
    <div className="w-10/12 mx-auto my-2 px-2">
      <div className=" ">
        <SectionHeading
          title={`${new Date().toLocaleDateString("default", {
            month: "long",
          })} Picks`}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-2">
        {slicedData.map((monthsPicks, index) => (
          <Link href={`/monthlyPicks/${monthsPicks._id}`} key={index}>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              className=" h-fit group cursor-pointer"
            >
              <div className=" h-80 relative overflow-hidden">
                <Image
                  objectFit="cover"
                  height={200}
                  width={400}
                  className=" w-full h-full"
                  src={monthsPicks.img}
                  alt=""
                />
                <div className=" text-white absolute h-full w-full bg-black/50 flex flex-col items-start justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <h2 className=" px-5 py-2 text-white text-3xl font-semibold">
                    {monthsPicks.title}
                  </h2>
                  <p className=" px-5 py-2 text-lg font-thin italic">
                    {monthsPicks.description}
                  </p>
                  <p className=" px-5 py-2 font-semibold text-three">
                    |
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                    }).format(new Date(monthsPicks.date))}
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

export default JanuaryPicks;
