"use client";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import Image from "next/image";

const Popular = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    await axiosPublic
      .get(`/forum/find/popularpost?page=${page}`)
      .then((data) => {
        setPosts(data.data);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="pb-10">
      {posts?.map((post) => (
        <div
          key={post._id}
          className="border max-w-2xl mx-auto  my-4 hover:bg-green-300"
        >
          <Link href={`/forum/${post?._id}`}>
            <div className="mx-8 my-6">
              <div>
                <div className="lg:flex  md:flex-row lg:items-center lg:justify-start gap-6">
                  <div className=" flex items-center justify-center gap-2 px-1 py-1 rounded-sm">
                    {/* <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span> */}
                    <AiTwotoneLike className="text-[#818CF8]" />{" "}
                    <span className="text-[#2a4bf1ee] text-[18px]">
                      {post?.likesCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="lg:text-[20px] md:text-[20px]">
                      {post?.title}{" "}
                    </h3>

                    <div className="flex items-center justify-start gap-2 mt-4">
                      <Image
                        height={500}
                        width={500}
                        src={
                          post?.userPhoto
                            ? post.userPhoto
                            : `https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais`
                        }
                        alt="avatar image"
                        className="rounded-full h-4 w-4  lg:inline md:inline hidden"
                      />

                      <Link href={`/forum/userprofile/${post?.userEmail}`}>
                        {" "}
                        <p className="text-[#2a4bf1ee] text-[14px]">
                          {post?.userName ? post.userName : post.userEmail}
                        </p>{" "}
                      </Link>
                      <div className="text-gray-700 text-[15px] pb-1"> . </div>
                      {/* <span className='text-gray-700 text-[14px] align-middle'> . </span> */}
                      <p className="text-gray-700 text-[14px]">
                        {moment(post?.date).format("DD MMMM")}
                      </p>
                      <div className="text-gray-700 text-[15px] pb-1"> . </div>
                      <p className="text-gray-700 text-[14px] lg:inline md:inline hidden">
                        {post?.comments?.length} comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      <div className="flex justify-center mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Popular;
