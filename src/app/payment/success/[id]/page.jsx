"use client"
import Lottie from 'lottie-react';
import React from 'react';
import paymentSuccess from "../../../../../public/payment-success.json";
import Button1 from '@/components/Common/Button1';
import Link from 'next/link';

const page = ({ params }) => {
    return (
        <div className=''>
            <div className='text-center w-1/2 m-auto'>
                <Lottie animationData={paymentSuccess} loop={true} />
                <h1 className='flex justify-center items-center font-bold font-mono text-red-500'>            <span className='text-2xl text-black pr-2'>Transaction ID :  </span>  {params.id} </h1>
            </div>
            <div className='my-10 flex gap-4 justify-center'>
                <Link href="/"><Button1 title={"Back to Home"} /></Link>
                <Link href="/"><Button1 title={"Shop More"} /></Link>
            </div>
        </div>

    );
};

export default page;