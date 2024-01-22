
import SectionHeading from '@/components/Common/SectionHeading';
import Image from 'next/image';
import React from 'react';

const HealthAndFitness = async () => {
    const res = await fetch("https://quick-fit-server.vercel.app/api/v1/category", {
        cache: "no-store"
    });
    const data = await res.json();
    const slicedData = data.slice(0, 10);
    return (
        <div className='w-11/12 mx-auto my-2 px-2'>
            <SectionHeading title={"Health and Fitness Category"}></SectionHeading>
            <div className='grid md:grid-cols-6 grid-cols-1 gap-2'>
                {slicedData.map((type, index) => (
                    <div
                        className={`${index === 2 && "md:col-span-2 md:row-span-2 h-full w-full"} ${index === 2 && "md:col-span-2 md:row-span-2 h-full w-full"
                            } ${index === 3 && "md:col-span-2 md:row-span-2 h-full w-full"} ${index === 4 && "md:col-span-2 md:row-span-2 h-full w-full"
                            } ${index === 5 && "md:col-span-3 md:row-span-2 h-full w-full"} `}
                        key={index}
                    >
                        <div className="relative w-full h-full">
                            <Image
                            height={500}
                            width={500}
                            alt='types'
                                objectFit="cover"
                                src={type.image}
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                <p className="text-white text-xs md:text-sm lg:text-2xl font-bold">{type.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default HealthAndFitness;