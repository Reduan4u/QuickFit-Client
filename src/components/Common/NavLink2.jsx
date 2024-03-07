"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink2 = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <span
        className={`${
          isActive && "bg-one text-white  "
        }  text-xl px-4 hover:border-b-2 hover:text-white py-2 my-2 bg-gray-100 hover:bg-one transition-all duration-500`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink2;


