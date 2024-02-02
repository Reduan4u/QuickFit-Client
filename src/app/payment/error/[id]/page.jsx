"use client"
import Lottie from 'lottie-react';
import React from 'react';
import paymentFailed from "../../../../../public/payment-failed.json";
import Button1 from '@/components/Common/Button1';
import Link from 'next/link';

const page = ({ params }) => {
    return (
        <div className=''>
            <div className='text-center w-1/2 m-auto'>
                <Lottie animationData={paymentFailed} loop={true} />
                <h1 className='flex justify-center items-center font-bold font-mono text-2xl text-red-500'>
                    Please, Try Again! </h1>
            </div>
            <div className='my-10 flex gap-4 justify-center'>
                <Link href="/"><Button1 title={"Back to Home"} /></Link>
                <Link href="/"><Button1 title={"Shop More"} /></Link>
            </div>
        </div>

    );
};

export default page;