import LoginButton from '@/components/Common/LoginButton';
import SectionHeading from '@/components/Common/SectionHeading';
import Link from 'next/link';
import React from 'react';


const RelatedWorkoutVideos = async ({ params, category }) => {
    const result = await fetch('https://quick-fit-server.vercel.app/api/v1/workout', {
        cache: "no-store"
    });
    const data = await result.json();
    const relatedData = data.filter(item => item.category !== params.id);
    const remainingCategories = relatedData.filter(item => item._id !== params.Category);
    return (
        <div className='w-10/12 mx-auto'>
            <SectionHeading title='Related' />
            <div className="hero py-10" >
                <div className="text-center ">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {remainingCategories.map((d) => (
                            <div key={d._id} className=''>
                                <Link href={`/workout/${d.category}`}>
                                    <div className="w-full p-5 md:w-44">
                                        <LoginButton >{d?.category}</LoginButton>
                                    </div></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedWorkoutVideos;