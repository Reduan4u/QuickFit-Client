"use client";
import { AuthContext } from "@/components/Provider/AuthProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const StoriesBlogs = () => {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);
  const axios = useAxiosPublic();

  console.log(data);

  useEffect(() => {
    axios
      .get(`/stories/${user?.displayName}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        
      });
  }, [user?.displayName]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
      {data?.map((item, index) => (
        <div key={index} className=" h-fit group cursor-pointer">
          <div className=" h-80 relative overflow-hidden">
            <Image
              objectFit="cover"
              height={200}
              width={400}
              className=" w-full h-full"
              src={item?.img}
              alt=""
            />
            <div className=" text-white absolute h-full w-full bg-black/50 flex flex-col items-start justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <h2 className=" px-5 py-2 text-white text-3xl font-semibold">
                {item?.title}
              </h2>
              <p className=" px-5 py-2 text-lg font-thin italic">
                {item?.description}
              </p>
              <p className=" px-5 py-2 font-semibold text-primary">
                |
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                }).format(new Date(item.date))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesBlogs;
