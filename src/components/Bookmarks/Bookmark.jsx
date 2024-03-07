"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Loading1 from "../Loading/Loading1";
import Button1 from "../Common/Button1";

const Bookmark = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://quick-fit-server.vercel.app/api/v1/favourites/${user?.email}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  const hanldeDeleteFav = (id) => {
    axios
      .delete(`https://quick-fit-server.vercel.app/api/v1/favourites/${id}`)
      .then((res) => {
        if (res.data._id) {
          setData((data) => data.filter((item) => item._id !== id));
          toast.success("Removed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Bookmarks</h1>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.map((item, index) => (
            <div
              key={index}
              className="p-4 relative  border border-gray-200 rounded-md hover:shadow-md"
            >
              <button
                onClick={() => hanldeDeleteFav(item._id)}
                className=" absolute -right-2 -top-2
               btn rounded-full btn-primary h-12 w-12  text-white text-lg hover:bg-white hover:text-blue-700"
              >
                X
              </button>
              <Image
                height={48}
                width={500}
                className="w-full h-48 object-cover"
                src={item?.img}
                alt="title"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item?.title}</h2>
                <p className="text-gray-600 mb-4">{item?.description}</p>
                <Link href={`/allStories/${item?.blogId}`}>
                  <Button1 className="" title={"Read More..."} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* <h2 className=" text-5xl text-center h-[60vh] flex justify-center items-center">
            Empty......
          </h2> */}
          <Loading1></Loading1>
        </div>
      )}
    </div>
  );
};

export default Bookmark;
