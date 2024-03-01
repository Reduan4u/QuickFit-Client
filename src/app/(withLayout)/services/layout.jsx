import NavLink from "@/components/Common/NavLink";
import Image from "next/image";
import Link from "next/link";


const layout = ({ children }) => {
  return (
    <div className=" md:flex w-10/12 gap-4 mt-20 mx-auto ">
      <div className=" ">
        <div class="w-full md:w-[20vw] sticky top-40 text-white bg-gray-800 px-4 grid gap-4 md:gap-0 rounded-sm py-12 md:space-y-10">
          <NavLink href="/services/nutrition" class="hover:delay-200 hover:border-b-slate-500">
            Nutrition Plan
          </NavLink>
          <NavLink href="/services/fitness" class="hover:delay-200 hover:border-b-slate-500">
            Fitness & Performance
          </NavLink>
          <NavLink href="/services/balance" class="hover:delay-200 hover:border-b-slate-500">
            Balance Body & Mind
          </NavLink>
          <NavLink href="/services/female" class="hover:delay-200 hover:border-b-slate-500">
            Female Fat Loss Program
          </NavLink>
          <NavLink href="/services/cardioExercise" class="hover:delay-200 hover:border-b-slate-500">
            Cardio Exercise Program
          </NavLink>
        </div>




      </div>


      <div className="w-full  ">{children}</div>
    </div>
  );
};

export default layout;