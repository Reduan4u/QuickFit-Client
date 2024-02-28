import Image from 'next/image';
import React from 'react';

const AllCourses = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 gap-10 w-[70vw] mx-auto">
            {/*Course 1*/}
            <div className=" max-w-md w-full">
                <div className="relative">
                    <Image
                        height={1000}
                        width={1000}
                        alt="Banner Profile"
                        src="https://i.postimg.cc/xj31dXPx/286745083-498299938650866-1501901852078124155-n.jpg" className="w-full rounded-none h-52" />
                    <div className="absolute bg-black text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-bold border-white" >$94</div>
                </div>

                <div className='p-5'>
                    <p className="text-gray-700 mt-5 ">By: Ryan Patterson</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-3 hover:text-primary"> Introduction to Food and Health.</p>
                    
                    <div className='flex justify-start gap-5 items-center pt-2'>
                        <li className="list-inside list-disc text-primary hover:underline"> Duration</li>
                        <p className='text-primary'>#Category</p>
                        <p className='text-primary'>Level:</p>
                    </div>
                </div>
            </div>
            {/* Course 2 */}
            <div className=" max-w-md w-full">
                <div className="relative">
                    <Image
                        height={1000}
                        width={1000}
                        alt="Banner Profile" src="https://i.postimg.cc/xj31dXPx/286745083-498299938650866-1501901852078124155-n.jpg" className="w-full rounded-none h-52" />
                    <div className="absolute bg-black text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-bold border-white" >$94</div>
                </div>
                <div className='p-5'>
                    <p className="text-gray-700 mt-5 ">By: Ryan Patterson</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-3 hover:text-primary"> Introduction to Food and Health.</p>
                    
                    <div className='flex justify-start gap-5 items-center pt-2'>
                        <li className="list-inside list-disc text-primary hover:underline"> Duration</li>
                        <p className='text-primary'>#Category</p>
                        <p className='text-primary'>Level:</p>
                    </div>
                </div>
            </div>
            {/*Course 3 */}
            <div className=" max-w-md w-full">
                <div className="relative">
                    <Image
                        height={1000}
                        width={1000}
                        alt="Banner Profile" src="https://i.postimg.cc/xj31dXPx/286745083-498299938650866-1501901852078124155-n.jpg" className="w-full rounded-none h-52" />
                    <div className="absolute bg-black text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-bold border-white" >$94</div>
                </div>
                <div className='p-5'>
                    <p className="text-gray-700 mt-5 ">By: Ryan Patterson</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-3 hover:text-primary"> Introduction to Food and Health.</p>
                    
                    <div className='flex justify-start gap-5 items-center pt-2'>
                        <li className="list-inside list-disc text-primary hover:underline"> Duration</li>
                        <p className='text-primary'>#Category</p>
                        <p className='text-primary'>Level:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;