"use client";

import { useContext } from "react";
import Loading from "../../../public/loadingAni.json";
import Lottie from "lottie-react";
import UseContext from "@/hooks/UseContext";

function loading(props) {
  const { user } = UseContext();

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
