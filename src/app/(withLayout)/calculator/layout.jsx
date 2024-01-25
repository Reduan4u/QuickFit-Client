import NavLink from "@/components/Common/NavLink";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" md:flex  ">
      <div className=" w-[30vw] flex md:flex-col md: pt-32 md:space-y-10 md:text-3xl text-xs md:font-semibold md:h-screen">
        <NavLink href="/calculator/bmi">BMI Calculator</NavLink>
        <NavLink href="/calculator/calorie">Calorie Calculator</NavLink>
        <NavLink href="/calculator/diabetes">Diabetes Calculator</NavLink>
        <NavLink href="/calculator/fat">Fat Calculator</NavLink>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
