"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const ForumNavLink = ({children}) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link>
            <span className={`${isActive && "bg-green-600"} `}> {children} </span>
        </Link>
    );
};

export default ForumNavLink;