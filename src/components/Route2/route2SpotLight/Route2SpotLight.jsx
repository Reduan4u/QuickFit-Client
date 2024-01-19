import React from 'react';

const Route2SpotLight = async() => {
    const res = await fetch(
        "https://quickfit-server.vercel.app/api/v1/spotlight/getFit",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      //  console.log(data)
      return (
        <div className=" grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto my-20 gap-10 ">
          {data.map((story) => (
            <div key={story._id} className="shadow-xl">
              <div>
                <div className="h-52">
                  <img src={story?.img} className="h-full object-cover w-full" />
                </div>
    
                <div className="my-5">
                  <div className="flex items-center my-2 justify-around">
                    <p>{story?.date}</p>
                    <p>{story?.category}</p>
                  </div>
                  <h1 className="text-2xl font-semibold">{story?.title}</h1>
                  <p>{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
};

export default Route2SpotLight;