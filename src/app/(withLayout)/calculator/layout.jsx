import NavLink from "@/components/Common/NavLink";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" md:flex  ">
      <div className=" md:w-[30vw] w-full flex space-y-2 flex-wrap md:flex-col md:pt-20 mt-10 md:space-y-10 md:text-3xl text-xs md:font-semibold md:h-screen">
        <div className="">
          <NavLink href="/calculator" >Calculator 🔣</NavLink>
        </div>
        <NavLink href="/calculator/bmi">BMI Calculator</NavLink>
        <NavLink href="/calculator/diabetes">Diabetes Calculator</NavLink>
        <NavLink href="/calculator/fat">Fat Calculator</NavLink>
        <NavLink href="/calculator/gfr">GFR Calculator</NavLink>
      </div>
      <div className="w-full pt-20 ">{children}</div>
    </div>
  );
};

export default layout;
