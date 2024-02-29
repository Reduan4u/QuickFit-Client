import Image from 'next/image';
import React from 'react';

const ShortDescription = async ({ params }) => {
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    return (
        // <div className="pb-10 md:pb-20 w-10/12 mx-auto">
        //     <div className="rounded-lg bg-secondary sm:h-[70vh] md:h-[70vh] lg:h-[60vh] w-[75vw] px-5 pt-10 md:px-20 md:pt-20 lg:px-20 lg:pt-20" alt="">
        //         <h1 className='text-2xl md:text-3xl font-bold mb-2 text-white w-1/2'>{cat.category}</h1>
        //         <p className='w-2/3 text-justify text-sm md:text-base lg:text-xl text-gray-200 '>{cat.shortDescription}</p>
        //     </div>
        //     <Image
        //         height={500}
        //         width={500}
        //         alt='types'
        //         objectFit="cover"
        //         className=' rounded-lg bg-fixed lg:visible mr-0 -mt-80 h-[60vh] w-2/5 mx-auto md:sticky md:top-0' src={cat.image} />

        // </div>
        <div
            class="group flex flex-col justify-start items-start gap-2 w-10/12 mx-auto duration-500 relative rounded-lg p-4 bg-secondary hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div className="relative">
                <Image
                    height={500}
                    width={500}
                    alt='types'
                    objectFit="cover"
                    src={cat.image}
                    className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-16 -right-10 w-2/5 h-full rounded-lg hidden md:block"
                />

                <div className="w-full md:w-3/5 py-10 md:py-20">
                    <h2 className="text-2xl font-bold mb-2 text-white">{cat.category}</h2>
                    <p className="text-gray-200">
                        {cat.shortDescription}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ShortDescription;