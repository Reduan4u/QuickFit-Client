"use client"

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { usePathname } from "next/navigation";
import Login from "../Authentication/Login/Login";
import Loading1 from "../Loading/Loading1";


function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const pathname = usePathname()

    if(loading){
        return <Loading1></Loading1>
    }

    if(user){
        return children
    }

    return <Login path={pathname}></Login>
}

export default PrivateRoute;