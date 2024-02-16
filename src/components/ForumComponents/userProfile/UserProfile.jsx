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
const user = {
        name: 'John Doe',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        posts: 42,
        accountTime: '2 years',
        message: 'Hello, world!',
      };

      

      useEffect(()=>{
        axiosPublic.get(`forum/userprofile/${email}`)
        .then((data) => {
            setUserPosts(data?.data)
        })
      }, [])

      
    return (

<div>
<div className="min-h-screen text-[#fff] px-4 mx-auto max-w-3xl md:px-8 pt-20 pb-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <span className="text-[#fff] hover:text-[#f4f4f4] transition duration-200">
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
        <BsChatRightDotsFill className="cursor-pointer text-[#fff] hover:text-[#f4f4f4]transition duration-200" size={24} />
      </div>

      <div className="flex items-center mb-8">
        <Image
          src="data:image/jpeg;base64,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" // Replace with your image source
          alt={"userData"}
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-[#fff] ">Sourav Dutta</h2>
          <p className="text-[#fff]">$ Years</p>
        </div>
      </div>

      {/* Replace with your posts component or API call to fetch posts */}
      <div className="mb-8 grid grid-cols-2 gap-4">
  {userPosts?.map((post, index) => (
    <div key={index} className='border border-gray-700 my-4 text-[#fff] bg-[#102032] '>
      <div className='mx-8 my-6'>
        <div>
          <div className='flex items-center justify-start gap-6'>
            <div className='border border-gray-700 flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
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


      <Link href="/edit-profile">
        <button className="bg-[#6366F1] text-[#fff ] p-2 rounded-sm max-w-xs"> Edit Profile </button>
      </Link>
    </div>
  );
</div>
        
      
    );
};

export default UserProfile;