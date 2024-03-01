"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ForumNavLink = ({children, href}) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href}>
        <span
          className={`${isActive && "text-secondary border-b-2 pb-2 border-[#CF7500]"}`}
        >
          {children}
        </span>
      </Link>
    );
};

export default ForumNavLink;