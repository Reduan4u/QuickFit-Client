"use client"



import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsChatRightDotsFill } from 'react-icons/bs';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import moment from 'moment';
import { FaAngleUp } from 'react-icons/fa';

const UserProfile = ({params}) => {

    const {email} = params
const axiosPublic = useAxiosPublic();
const [userPosts, setUserPosts] = useState([])    
const [userDetails, setUserDetails] = useState([])          

      useEffect(()=>{
        axiosPublic.get(`forum/userprofile/${email}`)
        .then((data) => {
            setUserPosts(data?.data)
        });

        axiosPublic.get(`forum/userprofiledata/${email}`)
        .then((data) => {
            setUserDetails(data?.data)
        });
      }, [])

      console.log(userDetails);
      console.log(userPosts);
      
    return (

<div>
<div className="min-h-screen  px-4 mx-auto max-w-3xl md:px-8 pt-20 pb-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <span className=" hover:text-[#f4f4f4] transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <BsChatRightDotsFill className="cursor-pointer  hover:text-[#f4f4f4]transition duration-200" size={24} />
      </div>

      <div className="flex items-center mb-8">
        <Image
          src={userDetails?.image} // Replace with your image source
          alt={"userData"}
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold  ">{userDetails?.name}</h2>
          <p className="">$ Years</p>
        </div>
      </div>

      
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
  {Array.isArray(userPosts) && userPosts?.map((post, index) => (
    <div key={index} className=' shadow-lg my-4 '>
      <div className='mx-8 my-6'>
        <div>
          <div className='flex items-center justify-start gap-6'>
            <div className=' flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
              <FaAngleUp className='text-[#818CF8]' />
              <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span>
            </div>
            <div>
              <Link href={`/forum/${post?._id}`}>
                <h3>{post?.title}</h3>
              </Link>
              <div className='flex items-center justify-start gap-2 mt-4'>
              
                <p className='text-gray-700 text-[14px]'>{moment(post?.date).format('DD MMMM')}</p>
                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                <p className='text-gray-700 text-[14px]'>{post?.comments.length} comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* <Link href="/edit-profile">
        <button className="bg-[#6366F1] text-[#fff ] p-2 rounded-sm max-w-xs"> Edit Profile </button>
      </Link> */}
    </div>
  );
</div>
        
      
    );
};

export default UserProfile;