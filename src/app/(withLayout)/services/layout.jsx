import NavLink from "@/components/Common/NavLink";
import Image from "next/image";


const layout = ({ children }) => {
  return (
    <div className=" md:flex  w-10/12 mt-20 mx-auto ">
    <div className="flex flex-col ">
    <div className=" w-[20vw] text-white bg-indigo-950 px-4 flex md:flex-col rounded-sm  py-12 md:space-y-10    ">
      <NavLink
    href="/services/nutrition"
    className={`hover:delay-200   hover:border-b-slate-500`}
  >
    Nutrition Plan
  </NavLink>
      <NavLink
    href="/services/"
    className={`hover:delay-200 hover:border-b-slate-500`}
  >
    Balance Body & Mind
  </NavLink>
      <NavLink
    href="/services/"
    className={`hover:delay-200 hover:border-b-slate-500`}
  >
    Balance Body & Mind
  </NavLink>
      <NavLink
    href="/services/"
    className={`hover:delay-200 hover:border-b-slate-500`}
  >
    Female Fat Loss Program
  </NavLink>
      <NavLink
    href="/services/"
    className={`hover:delay-200 hover:border-b-slate-500`}
  >
    12 Week Muscle Building
  </NavLink>
      <NavLink
    href="/services/"
    className={`hover:delay-200 hover:border-b-slate-500`}
  >
     Cardio Exercise Program
  </NavLink>
        
      </div>

      <div className="bg-gray-400 pt-12 px-4 w-[20vw] "> 
      <h1 className="text-2xl ">Trainer Message</h1>
      <p className="py-4">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliver.</p>

      <div className="flex gap-4 items-center ">
  <Image
    className="rounded-full w-24 h-24"
    src="http://old3.commonsupport.com/mvrichard/wp-content/uploads/2019/08/service-8.jpg"
    alt="Alt text for your image"
    width={1000} // Set the width of the image
    height={1000} // Set the height of the image
  />
  <div>
    <h1 className="font-bold ">John MIchal</h1>
    <p className="text-gray-200">Founder of Gym</p>
  </div>

      </div>
      <div className="text-center py-8"><button className="btn btn-primary w-full">Hire Now</button></div>
       </div>
    </div>
      

      <div className="w-full  ">{children}</div>
    </div>
  );
};

export default layout;