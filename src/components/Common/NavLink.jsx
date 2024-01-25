"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <span
        className={`${
          isActive && "bg-orange-500 text-white rounded-r-lg p-2"
        }  text-xl px-4 hover:bg-orange-500 hover:text-white hover:rounded-r-lg hover:p-2 transition-all duration-500`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
