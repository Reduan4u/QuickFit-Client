import SectionHeading from '@/components/Common/SectionHeading';
import React from 'react';

const Questions = async ({ params }) => {
    // 
    // 

    // Category
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    //console.log(cat)
    return (
        <div className='w-10/12 mx-auto'>
            <SectionHeading className='' title={"Explore the Unknown? "} />
            <div className="">
                {cat.questions.map((item,i) => (
                    <div key={item._id} className="">
                        <div className="">
                            <div className="pb-6">
                                <h1 className="text-2xl font-semibold">{i + 1}. {item?.question}</h1>
                            </div>
                            <div className="text-justify text-base">
                                <p>{item?.answer?.details?.para1}</p>
                                <p className="py-5">{item?.answer?.details?.para2}</p>
                                <p className='pb-10'>{item?.answer?.details?.para3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Questions;