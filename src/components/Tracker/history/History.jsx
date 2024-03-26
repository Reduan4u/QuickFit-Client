"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/Common/Animation1";
import Loading1 from "@/components/Loading/Loading1";
import UseTracker from "@/hooks/UseTracker";
import TrackerNav from "../trackerNav/TrackerNav";
import PreviousTrackerCard from "../tracker_card/PreviousTrackerCard";
import SectionHeading from "@/components/Common/SectionHeading";

const History = () => {
  const { isPending, tracker } = UseTracker();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const today = year + "-" + month + "-" + date;
  const previousTracker = tracker?.filter((item) => item?.date !== today);

  if (isPending) {
    return <Loading1 />;
  }
  return (
    <div className=" min-h-screen">
      <div>
        <div>
          <TrackerNav />
          <SectionHeading title={"Previous Progress"}></SectionHeading>

          {/* showing previous progress card  */}
          <div className="my-10">
            {previousTracker?.length ? (
              <div>
                <div className="w-10/12 mx-auto flex flex-wrap lg:flex-row gap-8 lg:justify-center ">
                  {previousTracker?.map((item) => (
                    <PreviousTrackerCard
                      key={item?._id}
                      item={item}
                    ></PreviousTrackerCard>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="flex h-[50vh] justify-center items-center"
              >
                <h1 className="text-3xl md:text-5xl text-two font-bold text-center px-2 md:px-0 mx-auto w-96 md:w-1/2 lg:w-2/5 capitalize">
                  You did not Have Previous Days Exercises
                </h1>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
