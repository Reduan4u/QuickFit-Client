import Image from 'next/image';
import React from 'react';

const ShortDescription = async ({ params }) => {
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    return (
        <div className="pb-10 md:pb-20 w-10/12 mx-auto">
            <div className="rounded-lg bg-secondary sm:h-[70vh] md:h-[70vh] lg:h-[60vh] w-[75vw] px-5 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="">
                <h1 className='text-2xl md:text-3xl font-bold mb-2 text-white w-1/2'>{cat.category}</h1>
                <p className='w-2/3 text-justify text-sm md:text-base lg:text-xl text-gray-200 '>{cat.shortDescription}</p>
            </div>
            <Image
                height={500}
                width={500}
                alt='types'
                objectFit="cover"
                className=' rounded-lg bg-fixed lg:visible mr-0 -mt-80 h-[60vh] w-2/5 mx-auto md:sticky md:top-0' src={cat.image} />

        </div>
    );
};

export default ShortDescription;