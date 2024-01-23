import SectionHeading from '@/components/Common/SectionHeading';
import Link from 'next/link';
import React from 'react';

const Route2SpotLight = async () => {
  const res = await fetch(
    "https://quickfit-server.vercel.app/api/v1/spotlight/getFit",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  //  console.log(data)
  return (
    <div className="w-11/12 mx-auto">
      <SectionHeading title={"Spotlight"} />
      <div className=" grid grid-cols-1 md:grid-cols-3  my-20 gap-10 ">
        {data.map((story) => (
          <div key={story._id} className="shadow-xl">
            <Link href={`/spotlight/${story._id}`}> 
            <div>
              <div className="h-52">
                <img src={story?.img} className="h-full object-cover w-full" />
              </div>

              <div className="space-y-5 my-4 mx-4">
                <div className="flex items-center my-2 justify-between">
                  <p className='text-orange-600'>Date: {story?.date}</p>
                  <p className='text-orange-600'>Category:{story?.category}</p>
                </div>
                <h1 className="text-2xl font-semibold">{story?.title}</h1>
                <p>{story.description}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Route2SpotLight;