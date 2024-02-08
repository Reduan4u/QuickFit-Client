"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashLink = ({ href, children, icon }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link className=" " href={href}>
      <div
        className={` flex items-center gap-3 ${
          isActive &&
          " bg-[#b7bac1]  p-2 font-semibold rounded-md text-[#151c2c]"
        }  text-xl   px-4  text-white hover:text-[#151c2c]  hover:bg-[#b7bac1] hover:p-2 hover:px-8 hover:font-semibold hover:rounded-md transition-all duration-500  w-48`}
      >
        <span>{icon}</span>
        <span>{children}</span>
      </div>
    </Link>
  );
};
export default DashLink;

// previous classess ===>
// bg-orange-500 text-white rounded-r-lg p-2"
//         }  text-xl px-4 hover:bg-orange-500 hover:text-white hover:rounded-r-lg hover:p-2 transition-all duration-500
