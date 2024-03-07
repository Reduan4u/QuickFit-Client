"use client";
import Loading1 from "@/components/Loading/Loading1";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import moment from "moment";
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaAngleUp, FaBan } from "react-icons/fa";
import CommentForm from "../commentForm/CommentForm";
import { AuthContext } from "@/components/Provider/AuthProvider";
import Swal from "sweetalert2";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import Image from "next/image";

const SinglePost = ({ params }) => {
  const axiosPublic = useAxiosPublic();
  const [singlePostData, setSinglePostData] = useState(null);
  const { control, register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosPublic.get(`/forum/single/${params.id}`);
      setSinglePostData(data?.data);
    };

    fetchData();
  }, [axiosPublic, params.id]);

  if (!singlePostData) {
    return <Loading1></Loading1>;
  }

  const postLike = async () => {
    console.log("clicked");
    console.log(singlePostData);
    const postId = singlePostData?._id;
    const likeEmail = user?.email;
    console.log(likeEmail);

    axiosPublic.put("/forum/like", { postId, likeEmail }).then((data) => {
      if (data?.data === "Liked") {
        Swal.fire({
          icon: "success",
          title: `Post Liked!!`,
          text: "Keep up the good work!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: `Unliked!!`,
          text: "Please report if the content does not match our terms",
        });
      }
    });
  };

  return (
    <div className="px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-start md:gap-4 lg:gap-8  mt-4 md:mt-8">
        <div
          onClick={postLike}
          className="border border-gray-700 px-1 py-1 rounded-sm cursor-pointer  hover:bg-[#102032]"
        >
          <div className=" flex items-center justify-center gap-2 px-1 py-1 rounded-sm">
            {/* <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span> */}
            <AiTwotoneLike className="text-[#818CF8]" />{" "}
            <span className="text-[#2a4bf1ee] text-[18px]">
              {singlePostData?.likes.length}
            </span>
          </div>
        </div>

        <h1 className="text-2xl">{singlePostData?.title}</h1>
      </div>

      <div className="mt-6 max-w-xl mx-auto">
        <div className="flex items-center justify-start gap-2 mx-auto w-[75%] lg:w-full md:w-full mt-4 md:mt-6">
          <Image
            height={500}
            width={500}
            src={singlePostData?.userPhoto}
            alt="avatar image"
            className="rounded-full h-4 w-4 md:h-8 md:w-8"
          />

          <p className="text-[#2a4bf1ee] text-[14px]">
            <Link href={`userprofile/${singlePostData?.userEmail}`}>
              {singlePostData?.userName
                ? singlePostData.userName
                : singlePostData.userEmail}
            </Link>
          </p>

          <div className="text-gray-700 text-[15px] pb-1"> . </div>
          <p className="text-gray-700 text-[14px]">
            {moment(singlePostData?.date).format("DD MMMM")}
          </p>
          <div className="text-gray-700 text-[15px] pb-1"> . </div>
          <p className="text-gray-700 text-[14px]">
            {singlePostData?.comments.length} comments
          </p>
        </div>

        <div className="mt-10">
          <div dangerouslySetInnerHTML={{ __html: singlePostData?.content }} />
        </div>

        <div className="mt-6 text-[18px]">
          {singlePostData?.comments.length} comments
        </div>

        {/* Comment Section */}
        <div className="mt-5 mb-10 pb-6">
          <CommentForm postId={params?.id} />
        </div>

        {singlePostData?.comments?.map((comment, index) => (
          <div key={index} className="py-4 px-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center justify-end gap-4 mb-2">
                <Link href={`/forum/userprofile/${comment?.userEmail}`}>
                  <p className="text-[#2a4bf1ee] text-[14px]">
                    {comment?.userName ? comment.userName : comment?.userEmail}
                  </p>
                </Link>
                <p className="text-gray-500 text-sm">
                  {moment(comment?.date).format("DD MMMM")}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-red-500 text-[14px]">
                <button>Report</button> <FaBan />
              </div>
            </div>
            <p className="text-sm  mt-2">{comment?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
