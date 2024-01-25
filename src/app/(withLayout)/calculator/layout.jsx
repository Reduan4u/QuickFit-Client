import ActiveLink from "@/components/ActiveLink/ActiveLink";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" md:flex  ">
      <div className=" w-[30vw] flex md:flex-col md: pt-32 md:space-y-10 md:text-3xl text-xs md:font-semibold md:h-screen">
        <ActiveLink href="/calculator/bmi">BMI Calculator</ActiveLink>
        <ActiveLink href="/calculator/calorie">Calorie Calculator</ActiveLink>
        <ActiveLink href="/calculator/diabetes">Diabetes Calculator</ActiveLink>
        <ActiveLink href="/calculator/fat">Fat Calculator</ActiveLink>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
