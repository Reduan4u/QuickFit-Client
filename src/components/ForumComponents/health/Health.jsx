"use client"

import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import moment from 'moment';
import Link from 'next/link';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { AiTwotoneLike } from "react-icons/ai";

const Health = () => {
    const [posts, setPosts] = useState([]);
     const axiosPublic = useAxiosPublic(); 

    const getData = async () => {
        // Assuming useAxiosPublic is correctly implemented and works
        await axiosPublic.get(`/forum/Health`)
            .then((data) => {
                setPosts(data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='pb-10'>
            {
            
            posts?.map(post=>(
                <div key={post._id} className='border max-w-2xl mx-auto border-gray-700 my-4 text-[#fff] bg-[#102032]'>
            <div className='mx-8 my-6'>
                <div>
                    <div className='lg:flex  md:flex-row lg:items-center lg:justify-start gap-6'>

                        <div className=' flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
                        {/* <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span> */}
                            <AiTwotoneLike  className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[18px]'>{post?.likes.length}</span>
                        </div>

                        <div>
                            <Link href={`/forum/${post?._id}`}> <h3>{post?.title} </h3> </Link>
                           
                            
                           
                            <div className='flex items-center justify-start 
                                            
                                            gap-2 mt-4'>
                                <img 
                                src={post?.photoURL ? post.photoURL : `https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais`} 
                                alt="avatar image" className='rounded-full h-4 w-4  lg:inline md:inline hidden' />

                                <p className='text-secondary text-[14px]'>{post?.userName ? post.userName : post.userEmail}</p>
                                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                                {/* <span className='text-gray-700 text-[14px] align-middle'> . </span> */}
                                <p className='text-gray-700 text-[14px]'>{moment(post?.date).format("DD MMMM")}</p>
                                <div className='text-gray-700 text-[15px] pb-1'> . </div>
                                <p className='text-gray-700 text-[14px] lg:inline md:inline hidden'>{post?.comments.length} comments</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

            ))
            
            
            
            }
        </div>
    );
};

export default Health;
