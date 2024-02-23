import SectionHeading from '@/components/Common/SectionHeading';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";


const RelatedWorkoutVideos = async ({ params, category }) => {
    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/workout', {
        cache: "no-store"
    });
    const data = await result.json();
    //console.log(data)

    const relatedData = data.filter(item => item.category !== params.id);
    const remainingCategories = relatedData.filter(item => item._id !== params.Category);
    //console.log(remainingCategories)
    return (
        <div className='w-10/12 mx-auto'>
            <SectionHeading title='Related' />
            {remainingCategories.map((d) => (
                <div key={d._id} className=''>
                    {/* <h1 className='border border-y'>{d.category}</h1> */}
                    <Link href={`/workout/${d.category}`}>
                    <button
                        className="hover:underline justify-between w-full md:w-1/2 cursor-pointer inline-flex items-center bg-gray-200 rounded-full p-2 my-2 text-xl text-black border-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300  focus:bg-transparent">
                        
                        <p className='pl-4'>{d.category}</p>
                        <MdArrowOutward />
                    </button></Link>
                </div>
            ))}
        </div>
    );
};

export default RelatedWorkoutVideos;