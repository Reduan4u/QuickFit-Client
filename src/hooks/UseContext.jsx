"use client";
import { AuthContext } from "@/components/Provider/AuthProvider";
import React, { useContext } from "react";

const UseContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default UseContext;
