import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";
import React from "react";
import moment from 'moment';
// import "../route1SpotLight/route1SpotLight.css"

const Route1SpotLight = async () => {
    const res = await fetch(
        "https://quickfit-server.vercel.app/api/v1/spotlight/eatBetter",
        {
            cache: "no-store",
        }
    );
    const data = await res.json();
    return (
        <div className="w-11/12 mx-auto">
            <SectionHeading title={"Spotlight"} />
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.map((story) => (

                    <div key={story._id} className="">


                        <Link href={`/spotlight/${story._id}`}>
                        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={story?.img} alt={story?.title} />
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

export default Route1SpotLight;
