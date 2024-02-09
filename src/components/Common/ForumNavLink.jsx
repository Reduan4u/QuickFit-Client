"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ForumNavLink = ({children, href}) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href}>
        <span
          className={`${isActive && "text-[#2a4bf1ee] border-b-2 pb-2 border-[#2a4bf1ee]"}`}
        >
          {children}
        </span>
      </Link>
    );
};

export default ForumNavLink;