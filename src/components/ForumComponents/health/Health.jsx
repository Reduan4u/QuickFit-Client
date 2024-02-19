"use client"

import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import moment from 'moment';
import Link from 'next/link';
import useAxiosPublic from '@/hooks/useAxiosPublic';

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
            {posts?.map(post => (
            //      <div key={post?._id} className='border border-gray-700 my-4 max-w-2xl mx-auto text-[#fff] bg-[#102032]'>
            //      <div className='mx-4 md:mx-8 my-6'> {/* Added responsive margin on small screens */}
 
            //          <div>
            //              <div className='flex flex-col md:flex-row items-center justify-start gap-6'> {/* Updated to flex-column on small screens */}
 
            //                  {/* <div className='border border-gray-700 flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
            //                      <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>244</span>
            //                  </div> */}
 
            //                  <div className='border border-gray-700 flex items-center justify-center gap-2 px-1 py-1 rounded-sm'>
            //                      <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span>
            //                  </div>
 
 
            //                  <div className='mt-4 md:mt-0'> {/* Added margin-top on small screens */}
            //                      {/* <h3 className='text-base  lg:text-2xl'>The Silent Epidemic: Understanding and Addressing the Impact of Stress on Your Health</h3> Adjusted heading size on small screens */}
            //                      <Link href={`/forum/${post?._id}`}>
            //                          <h3 className='text-base  lg:text-2xl'>{post?.title}</h3>
            //                      </Link>
 
            //                      <div className='flex items-center justify-start gap-2 mt-4'>
            //                          <img
            //                              src={post?.photoURL ? post.photoURL : 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais'}
            //                              alt="avatar image"
            //                              className='rounded-full h-4 w-4 md:h-8 md:w-8'
            //                          />
            //                          <p className='text-[#2a4bf1ee] text-[14px] md:text-[16px]'>{post?.userName ? post.userName : post.userEmail}</p>
            //                          <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
            //                          <p className='text-gray-700 text-[14px] md:text-[16px]'>{moment(post?.date).format("DD MMMM")}</p>
            //                          <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
            //                          <p className='text-gray-700 text-[14px] md:text-[16px]'>{post?.comments.length} comments</p>
            //                      </div>
            //                  </div>
 
            //              </div>
            //          </div>
            //      </div>
            //  </div>


           

            <div key={post?._id} className='border border-gray-700 my-4 mx-auto w-[100%] text-[#fff] bg-[#102032]'>
                <div className='mx-4 md:mx-8 my-6'> {/* Added responsive margin on small screens */}

                    <div>
                        <div className='lg:flex lg:flex-col md:flex-row items-center justify-start gap-6'> {/* Updated to flex-column on small screens */}

                            

                            <div className='border border-gray-700 flex items-center justify-center mx-auto w-[20%] gap-2 px-1 py-1 rounded-sm'>
                                <FaAngleUp className='text-[#818CF8]' /> <span className='text-[#2a4bf1ee] text-[14px]'>{post?.likes.length}</span>
                            </div>


                            <div className='mt-4 md:mt-0'> {/* Added margin-top on small screens */}
                                 <Link href={`/forum/${post?._id}`}>
                                     <h3 className='text-base  lg:text-2xl'>{post?.title}</h3>
                                 </Link>

                                <div className='flex items-center justify-start gap-2 mt-2 md:mt-4'> {/* Adjusted margin-top on small screens */}
                                    <img  src={post?.photoURL ? post.photoURL : 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais'}
                                         alt="avatar image"
                                         className='rounded-full h-4 w-4 md:h-8 md:w-8' /> {/* Adjusted image size on small screens */}

                                    <p className='text-[#2a4bf1ee] text-[14px] md:text-[16px]'>SouravDutta</p> {/* Adjusted text size on small screens */}
                                    <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
                                    <p className='text-gray-700 text-[14px] md:text-[16px]'>24 Feb</p>
                                    <div className='text-gray-700 text-[15px] md:text-[16px] pb-1'> . </div>
                                    <p className='text-gray-700 text-[14px] md:text-[16px]'>14 Comments</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        

        </div>
            ))}
        </div>
    );
};

export default Health;
