"use client";

import { useContext } from "react";
import Loading from "../../../public/loadingAni.json";
import Lottie from "lottie-react";
import { AuthContext } from "@/components/Provider/AuthProvider";

function loading(props) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="h-[100vh] flex justify-center item-center">
        <Lottie
          animationData={Loading}
          loop={true}
          className="h-[40vh] w-[40vw] mt-20"
        />
      </div>
    </div>
  );
}

export default loading;
