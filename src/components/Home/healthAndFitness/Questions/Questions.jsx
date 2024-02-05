import SectionHeading from '@/components/Common/SectionHeading';
import React from 'react';

const Questions = async ({ params }) => {
    // Category
    const result = await fetch(`https://quick-fit-server.vercel.app/api/v1/category/${params.id}`, {
        cache: "no-store"
    });
    const cat = await result.json();
    return (
        <div>
            <SectionHeading title={"Explore the Unknown? "} />
            <div className="p-5">
                {cat.questions.map((item) => (
                    <div key={item._id} className="w-full md:w-1/2 mx-auto m-5">
                        <div className="">
                            <div className="pb-6">
                                <h1 className="text-2xl font-semibold">{item?.question}</h1>
                            </div>
                            <div className="text-justify text-base">
                                <p>{item?.answer?.details?.para1}</p>
                                <p className="py-5">{item?.answer?.details?.para2}</p>
                                <p>{item?.answer?.details?.para3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Questions;