"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Animation1";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className=' my-16 text-center'>


      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="stats shadow stats-vertical lg:stats-horizontal border-2 border-gray-200">

        <div className="stat hover:scale-95  transition-all duration-200 hover:bg-gray-100">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary"> <CountUp end={10.6}
            duration={7}></CountUp>K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat hover:scale-95 transition-all duration-200 hover:bg-gray-100">
          <div className="stat-figure text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-title"> Total Comments</div>
          <div className="stat-value text-black"> <CountUp end={706}
            duration={7}></CountUp> </div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat hover:scale-95 transition-all duration-200 hover:bg-gray-100">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary"><CountUp end={40}
            duration={7}></CountUp>K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

      </motion.div>
    </div >
  );
};

export default Counter;