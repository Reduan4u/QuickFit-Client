import NavLink from "@/components/Common/NavLink";
import Image from "next/image";
import Link from "next/link";


const layout = ({ children }) => {
  return (
    <div className=" md:flex w-10/12 gap-4 mt-20 mx-auto ">
      <div className=" my-4 ">
        <div class="w-full md:w-[20vw] sticky top-40  bg-gray-200 grid  rounded-sm py-8 ">
          <Link href="/services/nutrition" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-primary hover:text-white duration-500">
            Nutrition Plan
          </Link>
          <Link href="/services/fitness" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-primary hover:text-white duration-500" >
            Fitness & Performance
          </Link>
          <Link href="/services/balance" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-primary hover:text-white duration-500">
            Balance Body & Mind
          </Link>
          <Link href="/services/female" className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-primary hover:text-white duration-500">
            Female Fat Loss Program
          </Link>
          <Link href="/services/cardioExercise"  className="bg-gray-50 py-[10px] text-lg px-4 mx-6 my-2 hover:bg-primary hover:text-white duration-500">
            Cardio Exercise Program
          </Link>
        </div>




      </div>


      <div className="w-full  ">{children}</div>
    </div>
  );
};

export default layout;