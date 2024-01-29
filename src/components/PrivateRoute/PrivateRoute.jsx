"use client"

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { useRouter } from "next/router";

function PrivateRoute({children}) {
    const {user} = useContext(AuthContext)
    // const router = useRouter();    

    return children
}

export default PrivateRoute;