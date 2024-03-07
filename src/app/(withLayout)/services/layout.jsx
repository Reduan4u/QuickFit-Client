
import NavLink2 from "@/components/Common/NavLink2";
import Link from "next/link";


const layout = ({ children }) => {
  return (
    <div className=" md:flex w-10/12 gap-4 mt-20 mx-auto ">
      <div className=" my-4 ">
        <div class="w-full md:w-[20vw] sticky top-40 pl-6 bg-gray-300 grid gap-6 rounded-sm py-8 ">
          <NavLink2 href="/services/nutrition" >
            Nutrition Plan
          </NavLink2>
          <NavLink2 href="/services/fitness"  >
            Fitness & Performance
          </NavLink2>
          <NavLink2 href="/services/balance" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-one hover:text-white duration-500">
            Balance Body & Mind
          </NavLink2>
          <NavLink2 href="/services/female" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-one hover:text-white duration-500">
            Female Fat Loss Program
          </NavLink2>
          <NavLink2 href="/services/cardioExercise"  className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-one hover:text-white duration-500">
            Cardio Exercise Program
          </NavLink2>
        </div>

      </div>


      <div className="w-full  ">{children}</div>
    </div>
  );
};

export default layout;