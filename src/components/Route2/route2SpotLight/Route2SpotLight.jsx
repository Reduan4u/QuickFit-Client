import SectionHeading from '@/components/Common/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Route2SpotLight = async () => {
  const res = await fetch(
    "https://quick-fit-server.vercel.app/api/v1/spotlight",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div className="w-11/12 mx-auto">
      <SectionHeading title={"Spotlight"} />
      <div className=" grid grid-cols-1 md:grid-cols-3  my-20 gap-10 ">
        {data.map((story) => (
          <div key={story._id}>
            <Link href={`/spotlight/${story._id}`}> 
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <Image 
        height={500}
        width={500}
       className="w-full h-48 object-cover" src={story?.img} alt={story?.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{story?.title}</h2>
        <p className="text-gray-600 mb-2">{story?.author}</p>
        <p className="text-gray-600">{story?.date}</p>
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