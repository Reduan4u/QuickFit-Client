"use client"

import Loading from "../../../public/loadingAni.json";
import Lottie from 'lottie-react';


function Loading1(props) {
    return (
        <div>
            <div className='h-[100vh] flex justify-center item-center'>
              <Lottie animationData={Loading} loop={true} className="h-[40vh] w-[40vw] mt-20" />
            </div>
        </div>
    );
}

export default Loading1;