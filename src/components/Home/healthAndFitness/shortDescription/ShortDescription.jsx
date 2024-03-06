import Image from 'next/image';
import React from 'react';

const ShortDescription = async ({ params }) => {
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    return (
        <div
            class="group flex flex-col justify-start items-start gap-2 w-10/12 mx-auto duration-500 relative rounded-sm p-4 bg-two hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div className="relative">
                <Image
                    height={500}
                    width={500}
                    alt='types'
                    objectFit="cover"
                    src={cat.image}
                    className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-16 -right-10 w-2/5 h-full rounded-sm hidden md:block"
                />

                <div className="w-full md:w-3/5 py-10 md:py-20">
                    <h2 className="text-2xl font-bold mb-2 text-justify text-three">{cat.category}</h2>
                    <p className="text-four">
                        {cat.shortDescription}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ShortDescription;