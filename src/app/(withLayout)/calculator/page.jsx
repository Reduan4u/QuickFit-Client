"use client"
import Lottie from 'lottie-react';
import React from 'react';
import calculator from "../../../../public/calculator.json";

const page = () => {
    return (
        <div className='w-2/3 m-auto'>
            <Lottie animationData={calculator} loop={true} />
        </div>
    );
};

export default page;