import Image from 'next/image';
import React from 'react';

const ShortDescription = async ({ params }) => {
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    return (
        <div className="pb-20">
            <div className="bg-orange-400 h-[70vh] w-[75vw] px-5 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="">
                <h1 className='w-2/3 text-base md:text-base text-white lg:text-4xl font-semibold'>{cat.category}</h1>
                <p className='py-10 text-white text-justify w-2/3 text-xs md:text-sm lg:text-xl'>{cat.shortDescription}</p>
            </div>
            <Image
                height={500}
                width={500}
                alt='types'
                objectFit="cover"
                className='bg-fixed lg:visible mr-0 -mt-80 h-[60vh] w-2/5 mx-auto md:sticky md:top-0' src={cat.image} />
        </div>
    );
};

export default ShortDescription;